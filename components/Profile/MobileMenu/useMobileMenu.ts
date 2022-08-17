import { useTranslation } from 'react-i18next';

export const useMobileMenu = () => {
  const { t } = useTranslation();

  return { t };
};
