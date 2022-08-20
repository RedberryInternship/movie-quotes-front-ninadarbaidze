import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { FormValues } from './types';

export const useFeedQuoteForm = () => {
  const { t } = useTranslation();

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //     } catch (err) {}
  //   };

  //   getData();
  // }, [t]);

  const defaultValues: any = {
    quoteEN: '',
    quoteGE: '',
    movieId: '',
  };

  const onSubmit = async (values: FormValues) => {
    console.log(values);
    try {
    } catch (error: any) {
      throw new Error('Request failed!');
    }
  };

  return { t, onSubmit, defaultValues };
};
