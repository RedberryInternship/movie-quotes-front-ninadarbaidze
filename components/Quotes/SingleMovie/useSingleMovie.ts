import { useTranslation } from 'next-i18next';
import { useContext } from 'react';
import { MovieContext } from 'store';

export const useSingleMovie = () => {
  const movieCtx = useContext(MovieContext);
  const { t } = useTranslation();

  const myLoader = () => {
    return `${process.env.NEXT_PUBLIC_API_URL}/${movieCtx.movieState.image}`;
  };
  return { myLoader, t };
};
