import { useTranslation } from 'next-i18next';

export const useAddMovieModal = () => {
  const { t } = useTranslation();
  return { t };
};
