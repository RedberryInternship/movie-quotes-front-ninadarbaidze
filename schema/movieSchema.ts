import { useTranslation } from 'next-i18next';
import * as Yup from 'yup';

const useMovieSchema = () => {
  const { t } = useTranslation();

  const movieSchema = Yup.object({
    movieNameEN: Yup.string()
      .required(`${t('home:commonRequired')}`)
      .matches(/^[a-zA-Z0-9$@$!%*?&#^-_. +]+$/, 'Type in English'),
    movieNameGE: Yup.string()
      .required(`${t('home:commonRequired')}`)
      .matches(/[\u10A0-\u10FF]/, 'წერე ქართულად'),
    genre: Yup.array().required(`${t('home:commonRequired')}`),
    directorEN: Yup.string()
      .required(`${t('home:commonRequired')}`)
      .matches(/^[a-zA-Z0-9$@$!%*?&#^-_. +]+$/, 'Type in English'),
    directorGE: Yup.string()
      .required(`${t('home:commonRequired')}`)
      .matches(/[\u10A0-\u10FF]/, 'წერე ქართულად'),
    budget: Yup.string()
      .required(`${t('home:commonRequired')}`)
      .matches(/[0-9]+/, `${t('home:numbers')}`),
    year: Yup.string()
      .required(`${t('home:commonRequired')}`)
      .matches(/[0-9]+/, `${t('home:numbers')}`),
    descriptionEN: Yup.string()
      .required(`${t('home:commonRequired')}`)
      .matches(/^[a-zA-Z0-9$@$!%*?&#^-_. +]+$/, 'Type in English'),
    descriptionGE: Yup.string()
      .required(`${t('home:commonRequired')}`)
      .matches(/[\u10A0-\u10FF]/, 'წერე ქართულად'),
    image: Yup.mixed().required(`${t('home:commonRequired')}`),
  });

  return { movieSchema };
};
export default useMovieSchema;
