import { useTranslation } from 'next-i18next';
import * as Yup from 'yup';

const useQuoteSchema = () => {
  const { t } = useTranslation();

  const quoteSchema = Yup.object({
    quoteGE: Yup.string()
      .required(`${t('home:commonRequired')}`)
      .matches(/[\u10A0-\u10FF]/, 'წერე ქართულად'),
    quoteEN: Yup.string()
      .required(`${t('home:commonRequired')}`)
      .matches(/^[a-zA-Z0-9$@$!%*?&#^-_. +]+$/, 'Type in English'),
    image: Yup.string().required(`${t('home:commonRequired')}`),

    movieId: Yup.string().required(`${t('home:commonRequired')}`),
  });

  return { quoteSchema };
};
export default useQuoteSchema;
