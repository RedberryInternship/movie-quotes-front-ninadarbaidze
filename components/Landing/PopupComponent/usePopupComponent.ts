import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { AuthContext } from 'store';

export const usePopupComponent = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const ctx = useContext(AuthContext);
  const modalState = router.query.modal;
  const passwordModalState = router.query.token;
  {
    passwordModalState && ctx.changePasswordUpdateState(true);
  }
  {
    modalState && ctx.changePasswordUpdateState(false);
  }
  return { t, modalState };
};
