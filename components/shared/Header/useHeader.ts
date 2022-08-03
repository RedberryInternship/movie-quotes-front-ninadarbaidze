import { useContext } from 'react';
import { MovieQuotesContext } from 'store';
import { useTranslation } from 'react-i18next';

const useHeader = () => {
  const { t } = useTranslation();
  const ctx = useContext(MovieQuotesContext);

  const changeRegistrationModalState = ctx.changeRegistrationModalState;

  return { t, changeRegistrationModalState };
};

export default useHeader;
