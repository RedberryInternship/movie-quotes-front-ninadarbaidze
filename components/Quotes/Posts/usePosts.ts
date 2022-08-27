import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useContext, useEffect, useRef, useState } from 'react';
import { getQuoteById, likePost } from 'services';
import { AuthContext, QuoteContext, UserContext } from 'store';
import { QuotesListTypes } from 'types';

export const usePosts = (props: { quote: QuotesListTypes }) => {
  const { quote } = props;
  const userCtx = useContext(UserContext);
  const quoteCtx = useContext(QuoteContext);
  const ctx = useContext(AuthContext);
  const [comments, setComments] = useState([]);
  const router = useRouter();
  const currentLan: string | undefined = router!.locale;
  const { data: session } = useSession();

  const myLoader = () => {
    const defaultProfileImg = `/assets/images/profile.png`;
    if (session?.user && !userCtx.userState.profileImage) {
      return session!.user.image as string;
    } else if (userCtx.userState.profileImage) {
      return `${process.env.NEXT_PUBLIC_API_URL}/${userCtx.userState.profileImage}`;
    } else {
      return defaultProfileImg;
    }
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
  const commented = !!quote.comments.find((user) => user.userId._id === userId);

  const commentRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    commentRef.current?.focus();
  };

  return {
    userCtx,
    currentLan,
    myLoader,
    myLoader2,
    likeHandler,
    router,
    session,
    liked,
    commented,
    quoteCtx,
    comments,
    commentRef,
    handleClick,
  };
};
