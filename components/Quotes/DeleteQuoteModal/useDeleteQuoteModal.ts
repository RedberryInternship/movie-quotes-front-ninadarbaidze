import { useSession } from 'next-auth/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { deleteQuote } from 'services';
import { AuthContext, MovieContext, QuoteContext } from 'store';

export const useDeleteQuoteModal = (props: {
  setViewQuote: (arg0: boolean) => void;
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
    const quoteId = { quoteId: id };
    try {
      await deleteQuote(quoteId as unknown as string, token as string);
      setViewQuote(false);
      router.replace(`/feed/movies/${router.query.movieId}`);
    } catch (err: any) {}
  };

  return { t, movieCtx, deleteHandler };
};
