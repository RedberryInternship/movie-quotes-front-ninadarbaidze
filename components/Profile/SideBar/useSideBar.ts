import { useTranslation } from 'react-i18next';

export const useSideBar = () => {
  const { t } = useTranslation();

  return { t };
};
