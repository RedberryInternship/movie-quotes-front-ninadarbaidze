import { useTranslation } from 'next-i18next';

export const useVerifiedInfoBar = () => {
  const { t } = useTranslation();
  return { t };
};
