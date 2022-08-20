import { useTranslation } from 'next-i18next';

export const useAddQuoteModal = () => {
  const { t } = useTranslation();

  return { t };
};
