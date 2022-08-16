import { useTranslation } from 'next-i18next';
import { useContext } from 'react';
import { MovieContext } from 'store';

export const useDeleteMovieModal = () => {
  const { t } = useTranslation();
  const movieCtx = useContext(MovieContext);

  return { t, movieCtx };
};
