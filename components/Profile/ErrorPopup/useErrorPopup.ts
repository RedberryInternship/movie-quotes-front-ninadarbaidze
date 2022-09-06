import { useTranslation } from 'next-i18next';
import { useContext } from 'react';
import { UserContext } from 'store';

export const useErrorPopup = () => {
  const userCtx = useContext(UserContext);
  const { t } = useTranslation();
  return { userCtx, t };
};
