import { useTranslation } from 'next-i18next';

export const useEmailItem = () => {
  const { t } = useTranslation();
  return { t };
};
