import { useSession } from 'next-auth/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { likePost } from 'services';
import { AuthContext, QuoteContext } from 'store';

export const useQuoteId = (props: { data }) => {
  const { data } = props;
  const router = useRouter();
  const quoteId = router.query.quoteId;
  const ctx = useContext(AuthContext);
  const { data: session } = useSession();
  const { status } = useSession();
  const quoteCtx = useContext(QuoteContext);
  const [deleteModal, setDeleteModal] = useState(false);
  const { t } = useTranslation();
  let token = session ? session.accessToken : ctx.token;
  let userId: string | Blob | unknown = session ? session.userId : ctx.userId;

  useEffect(() => {
    if (status === 'unauthenticated' && !ctx.isLoggedIn) {
      router.push('/');
    }
  }, [ctx.isLoggedIn, router, status]);

  const liked = data && !!data.likes.find((user) => user === userId);
  const commented =
    data && !!data.comments.find((user) => user.userId._id === userId);

  const deleteQuoteHandler = () => {
    setDeleteModal(true);
  };

  const likeHandler = useCallback(async () => {
    try {
      const data = {
        userId: userId as string,
        quoteId: quoteId as string,
      };
      await likePost(data, token as string);
    } catch (err: any) {}
  }, [quoteId, token, userId]);

  const commentRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleClick = () => {
    commentRef.current?.focus();
  };

  const myLoader = () => {
    return `${process.env.NEXT_PUBLIC_API_URL}/${data.image}`;
  };
  return {
    t,
    myLoader,
    deleteModal,
    setDeleteModal,
    deleteQuoteHandler,
    quoteCtx,
    // quoteDetail,
    likeHandler,
    liked,
    commented,
    handleClick,
    commentRef,
  };
};
