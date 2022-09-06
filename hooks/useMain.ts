import { useTranslation } from 'next-i18next';
import { useContext } from 'react';
import { AuthContext } from 'store';

export const useMain = () => {
  const { t } = useTranslation();
  const ctx = useContext(AuthContext);

  return { t, ctx };
};
