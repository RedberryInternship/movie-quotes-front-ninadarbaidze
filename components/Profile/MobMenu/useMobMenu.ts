import { useTranslation } from 'react-i18next';

export const useMobMenu = () => {
  const { t } = useTranslation();

  return { t };
};
