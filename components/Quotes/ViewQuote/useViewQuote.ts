import { useSession } from 'next-auth/react';
import { useTranslation } from 'next-i18next';
import { useContext, useEffect, useRef, useState } from 'react';
import { getQuoteById, likePost } from 'services';
import { AuthContext, QuoteContext } from 'store';
import { QuotesListTypes } from 'types';

export const useViewQuote = (props: {
  setViewQuote: (arg0: boolean) => void;
}) => {
  const { setViewQuote } = props;
  const quoteCtx = useContext(QuoteContext);
  const ctx = useContext(AuthContext);
  const quoteData = quoteCtx.quoteState;
  const [deleteModal, setDeleteModal] = useState(false);
  const [quoteDetail, setQuoteDetail] = useState<QuotesListTypes>();
  const { t } = useTranslation();
  const { data: session } = useSession();
  let token = session ? session.accessToken : ctx.token;
  let userId: string | Blob | unknown = session ? session.userId : ctx.userId;

  const liked =
    quoteDetail && !!quoteDetail.likes.find((user) => user === userId);
  const commented =
    quoteDetail &&
    !!quoteDetail.comments.find((user) => user.userId._id === userId);

  const deleteQuoteHandler = () => {
    setDeleteModal(true);
  };

  const editQuoteHandler = () => {
    quoteCtx.editQuoteHandler(true);
    setViewQuote(false);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getQuoteById(quoteData._id, token as string);
        quoteCtx.refreshQuotesHandler();
        setQuoteDetail(response.data.quote);
      } catch (err: any) {}
    };
    getData();
  }, [ctx.token, quoteData._id, session, quoteCtx.refreshQuotes, token]);

  const likeHandler = async () => {
    try {
      const data = {
        userId: userId as string,
        quoteId: quoteData._id as string,
      };
      await likePost(data, token as string);
      quoteCtx.refreshQuotesHandler();
    } catch (err: any) {}
  };

  const commentRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleClick = () => {
    commentRef.current?.focus();
  };

  const myLoader = () => {
    return `${process.env.NEXT_PUBLIC_API_URL}/${quoteCtx.quoteState.image}`;
  };
  return {
    t,
    myLoader,
    quoteData,
    deleteModal,
    setDeleteModal,
    deleteQuoteHandler,
    quoteCtx,
    editQuoteHandler,
    quoteDetail,
    likeHandler,
    liked,
    commented,
    handleClick,
    commentRef,
  };
};
