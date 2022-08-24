import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { addQuote, deleteQuote, updateQuote } from 'services';
import { AuthContext, QuoteContext } from 'store';
import { QuoteDefaultValues, QuoteFormValues } from './types';

export const useEditQuoteModal = () => {
  const { t } = useTranslation();
  const { data: session } = useSession();
  const ctx = useContext(AuthContext);
  const quoteCtx = useContext(QuoteContext);
  const [deleteModal, setDeleteModal] = useState(false);
  const router = useRouter();
  const movieId = router.query.movieId as string;
  const quoteId = quoteCtx.quoteState._id;

  const defaultValues: QuoteDefaultValues = {
    quoteEN: quoteCtx.quoteState.quoteEN,
    quoteGE: quoteCtx.quoteState.quoteGE,
    movieId: quoteCtx.quoteState.movieId,
    image: quoteCtx.quoteState.image,
  };

  let token = session ? session.accessToken : ctx.token;

  const deleteHandler = async (setQuoteHandler: (arg0: boolean) => void) => {
    const id = { quoteId: quoteId };
    try {
      await deleteQuote(id as unknown as string, token as string);
      setQuoteHandler(false);
      router.replace(`/feed/movies/${router.query.movieId}`);
    } catch (err: any) {}
  };

  const onSubmit = async (values: QuoteFormValues) => {
    const userId: string | Blob | unknown = session
      ? session.userId
      : ctx.userId;
    const token: string | Blob | unknown = session
      ? session.accessToken
      : ctx.token;
    const quoteId = quoteCtx.quoteState._id;
    const formData = new FormData();
    const keys = Object.keys(values);

    keys.forEach((key: string) => {
      formData.append(`${key}`, values[key as keyof QuoteDefaultValues]);
    });
    formData.append('userId', userId as string);

    try {
      console.log(values);
      await updateQuote(formData, token as unknown as string, quoteId);
      router.replace(`/feed/movies/${movieId}`);
      quoteCtx.editQuoteHandler(false);
    } catch (error: any) {
      throw new Error('Request failed!');
    }
  };

  return {
    t,
    onSubmit,
    defaultValues,
    quoteCtx,
    deleteModal,
    setDeleteModal,
    deleteHandler,
  };
};
