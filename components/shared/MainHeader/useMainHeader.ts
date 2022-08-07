import { useTranslation } from 'react-i18next';

const useMainHeader = () => {
  const { t } = useTranslation();

  return { t };
};

export default useMainHeader;
