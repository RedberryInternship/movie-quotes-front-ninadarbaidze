import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useContext, useState, useEffect } from 'react';
import { deleteQuote, getQuoteById } from 'services';
import { AuthContext, QuoteContext } from 'store';

export const useManageQuoteModal = (props: {
  id: string | undefined;
  setViewQuote: (arg0: boolean) => void;
}) => {
  const { id, setViewQuote } = props;
  const { data: session } = useSession();
  const ctx = useContext(AuthContext);
  const quoteCtx = useContext(QuoteContext);
  const [deleteModal, setDeleteModal] = useState(false);
  const router = useRouter();

  let token = session ? session.accessToken : ctx.token;

  const deleteHandler = async (setQuoteHandler: (arg0: boolean) => void) => {
    const quoteId = { quoteId: id };
    try {
      await deleteQuote(quoteId as unknown as string, token as string);
      setQuoteHandler(false);
      router.replace(`/feed/movies/${router.query.movieId}`);
    } catch (err: any) {}
  };

  useEffect(() => {
    const viewQuoteHandler = async () => {
      try {
        const response = await getQuoteById(
          id as unknown as string,
          token as string
        );
        quoteCtx.getQuote(response.data.quote);
      } catch (err: any) {}
    };
    viewQuoteHandler();
  }, [id, setViewQuote, token]);

  return { deleteHandler, deleteModal, setDeleteModal, quoteCtx };
};
