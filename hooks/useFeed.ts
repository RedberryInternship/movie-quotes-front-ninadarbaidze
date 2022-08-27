import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { getQuotes } from 'services';
import { AuthContext, QuoteContext } from 'store';
import { QuotesListTypes } from 'types';
import openSocket from 'socket.io-client';

export const useFeed = () => {
  const router = useRouter();
  const ctx = useContext(AuthContext);
  const { status } = useSession();
  const quoteCtx = useContext(QuoteContext);
  const { data: session } = useSession();
  const [quotes, setQuotes] = useState<QuotesListTypes[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (status === 'unauthenticated' && !ctx.isLoggedIn) {
      router.push('/');
    }
  }, [ctx.isLoggedIn, router, status]);

  useEffect(() => {
    const getData = async () => {
      try {
        let token = session ? session.accessToken : ctx.token;
        const response = await getQuotes(page, token as string);
        setQuotes(response.data);
      } catch (err: any) {}
    };
    getData();
  }, [ctx.token, page, session]);

  useEffect(() => {
    const socket = openSocket(`${process.env.NEXT_PUBLIC_API_URL}`);
    socket.on('quotes', (data) => {
      const quote = data.quote;
      if (data.action === 'create') {
        addQuote(quote);
      }
      if (data.action === 'addComment') {
        console.log(data.quote);
        addComment(data.quote);
      }

      if (data.action === 'like') {
        addLike(data.likes, data.id);
      }

      if (data.action === 'dislike') {
        addLike(data.likes, data.id);
      }
    });
  }, []);

  const addQuote = (quote: QuotesListTypes) => {
    setQuotes((prevState) => {
      let updatedQuotes = [];
      updatedQuotes = [...prevState];
      updatedQuotes!.unshift(quote);
      return updatedQuotes;
    });
  };
  const addComment = (comment: QuotesListTypes) => {
    setQuotes((prevState) => {
      const quoteIds = prevState.map((quote) => quote._id);
      const index = quoteIds.indexOf(comment._id);
      let newState = [...prevState];
      newState.splice(index, 1, comment);
      return newState;
    });
  };

  const addLike = (likes: string[], id: string) => {
    setQuotes((prevState) => {
      const quoteIds = prevState.map((quote) => quote._id);
      const index = quoteIds.indexOf(id);
      let newState = [...prevState];
      newState[index].likes = likes;
      console.log(newState);
      return newState;
    });
  };

  return { router, ctx, status, quoteCtx, quotes, setPage, page };
};
