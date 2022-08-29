import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { addQuote } from 'services';
import { AuthContext, QuoteContext } from 'store';
import { QuoteDefaultValues, QuoteFormValues } from './types';

export const useFeedQuoteForm = () => {
  const { t } = useTranslation();
  const { data: session } = useSession();
  const ctx = useContext(AuthContext);
  const quoteCtx = useContext(QuoteContext);
  const router = useRouter();
  const movieId = router.query.movieId as string;

  const defaultValues: QuoteDefaultValues = {
    quoteEN: '',
    quoteGE: '',
    movieId: quoteCtx.isMovieQuote ? movieId : '',
    image: '',
  };

  const onSubmit = async (values: QuoteFormValues) => {
    const userId: string | Blob | unknown = session
      ? session.userId
      : ctx.userId;
    const token: string | Blob | unknown = session
      ? session.accessToken
      : ctx.token;
    const formData = new FormData();
    const keys = Object.keys(values);

    keys.forEach((key: string) => {
      formData.append(`${key}`, values[key as keyof QuoteDefaultValues]);
    });
    formData.append('userId', userId as string);

    try {
      await addQuote(formData, token as string);
      router.replace(
        quoteCtx.isMovieQuote ? `/feed/movies/${movieId}` : '/feed'
      );
      quoteCtx.quoteCreationStateHandler();
    } catch (error: any) {
      throw new Error('Request failed!');
    }
  };

  return { t, onSubmit, defaultValues, quoteCtx };
};
