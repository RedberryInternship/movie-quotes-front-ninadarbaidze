import { useContext } from 'react';
import { AuthContext } from 'store';
import { useTranslation } from 'react-i18next';

const useMainHeader = () => {
  const { t } = useTranslation();
  const ctx = useContext(AuthContext);

  return { t };
};

export default useMainHeader;
