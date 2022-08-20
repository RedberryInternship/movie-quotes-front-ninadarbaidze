import { useTranslation } from 'react-i18next';
import { QuoteDefaultValues, QuoteFormValues } from './types';

export const useFeedQuoteForm = () => {
  const { t } = useTranslation();

  const defaultValues: QuoteDefaultValues = {
    quoteEN: '',
    quoteGE: '',
    movieId: '',
    image: '',
  };

  const onSubmit = async (values: QuoteFormValues) => {
    console.log(values);
    try {
    } catch (error: any) {
      throw new Error('Request failed!');
    }
  };

  return { t, onSubmit, defaultValues };
};
