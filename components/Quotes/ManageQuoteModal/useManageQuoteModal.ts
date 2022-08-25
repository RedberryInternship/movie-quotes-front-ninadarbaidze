import { useSession } from 'next-auth/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useContext, useState, useEffect } from 'react';
import { deleteQuote, getQuoteById } from 'services';
import { AuthContext, QuoteContext } from 'store';
import { QuoteIdType } from 'types';

export const useManageQuoteModal = (props: {
  id: string;
  setViewQuote: (arg0: boolean) => void;
}) => {
  const { id, setViewQuote } = props;
  const { data: session } = useSession();
  const ctx = useContext(AuthContext);
  const quoteCtx = useContext(QuoteContext);
  const [deleteModal, setDeleteModal] = useState(false);
  const router = useRouter();
  const { t } = useTranslation();

  let token = session ? session.accessToken : ctx.token;

  const deleteHandler = async (setQuoteHandler: (arg0: boolean) => void) => {
    const quoteId: QuoteIdType = { quoteId: id };
    try {
      await deleteQuote(quoteId, token as string);
      setQuoteHandler(false);
      router.replace(`/feed/movies/${router.query.movieId}`);
    } catch (err: any) {}
  };

  useEffect(() => {
    const viewQuoteHandler = async () => {
      try {
        const response = await getQuoteById(id, token as string);
        quoteCtx.getQuote(response.data.quote);
      } catch (err: any) {}
    };
    viewQuoteHandler();
  }, [id, setViewQuote, token]);

  return { t, deleteHandler, deleteModal, setDeleteModal, quoteCtx };
};
