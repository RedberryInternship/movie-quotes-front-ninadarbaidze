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

  useEffect(() => {
    if (status === 'unauthenticated' && !ctx.isLoggedIn) {
      router.push('/');
    }
  }, [ctx.isLoggedIn, router, status]);

  useEffect(() => {
    const getData = async () => {
      try {
        let token = session ? session.accessToken : ctx.token;
        const response = await getQuotes(token as string);
        console.log(response.data);
        setQuotes(response.data);
      } catch (err: any) {}
    };
    getData();
  }, [ctx.token, session]);

  useEffect(() => {
    const socket = openSocket(`${process.env.NEXT_PUBLIC_API_URL}`);
    socket.on('quotes', (data) => {
      const quote = data.quote;
      if (data.action === 'create') {
        // console.log(data.quote);
        addQuote(quote);
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

  return { router, ctx, status, quoteCtx, quotes };
};
