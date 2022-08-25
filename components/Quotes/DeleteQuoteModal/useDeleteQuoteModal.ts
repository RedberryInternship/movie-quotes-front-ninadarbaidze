import { useSession } from 'next-auth/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { deleteQuote } from 'services';
import { AuthContext, MovieContext, QuoteContext } from 'store';
import { QuoteIdType } from 'types';

export const useDeleteQuoteModal = (props: {
  setViewQuote: ((arg0: boolean) => void) | undefined;
}) => {
  const { setViewQuote } = props;
  const { t } = useTranslation();
  const movieCtx = useContext(MovieContext);
  const ctx = useContext(AuthContext);
  const { data: session } = useSession();
  let token = session ? session.accessToken : ctx.token;
  const router = useRouter();
  const quoteCtx = useContext(QuoteContext);
  const id = quoteCtx.quoteState._id;

  const deleteHandler = async () => {
    const quoteId: QuoteIdType = { quoteId: id };
    try {
      await deleteQuote(quoteId, token as string);
      setViewQuote && setViewQuote(false);
      quoteCtx.editQuoteModal && quoteCtx.editQuoteHandler(false);
      router.replace(`/feed/movies/${router.query.movieId}`);
    } catch (err: any) {}
  };

  return { t, movieCtx, deleteHandler };
};
