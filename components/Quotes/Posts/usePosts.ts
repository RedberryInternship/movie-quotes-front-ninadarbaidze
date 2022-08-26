import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { getQuoteById, likePost } from 'services';
import { AuthContext, QuoteContext, UserContext } from 'store';
import { QuotesListTypes } from 'types';
import openSocket from 'socket.io-client';

export const usePosts = (props: { quote: QuotesListTypes }) => {
  const { quote } = props;
  const userCtx = useContext(UserContext);
  const router = useRouter();
  const currentLan: string | undefined = router!.locale;
  const { data: session } = useSession();
  const ctx = useContext(AuthContext);
  const quoteCtx = useContext(QuoteContext);
  const [comments, setComments] = useState([]);
  const [commentQuantity, setCommentQuantity] = useState(null);

  const myLoader = () => {
    return `${process.env.NEXT_PUBLIC_API_URL}/${userCtx.userState.profileImage}`;
  };
  const myLoader2 = () => {
    return `${process.env.NEXT_PUBLIC_API_URL}/${quote?.image}`;
  };

  let token = session ? session.accessToken : ctx.token;
  const likeHandler = async () => {
    try {
      const userId: string | Blob | unknown = session
        ? session.userId
        : ctx.userId;
      const data = {
        userId: userId as string,
        quoteId: quote._id as string,
      };
      await likePost(data, token as string);
    } catch (err: any) {}
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getQuoteById(quote._id, token as string);
        setComments(response.data.quote.comments);
      } catch (err: any) {}
    };

    getData();
  }, [quote._id, token]);

  const userId: string | Blob | unknown = session ? session.userId : ctx.userId;

  const liked = !!quote.likes.find((user) => user === userId);

  return {
    userCtx,
    currentLan,
    myLoader,
    myLoader2,
    likeHandler,
    router,
    session,
    liked,
    quoteCtx,
    comments,
    commentQuantity,
  };
};
