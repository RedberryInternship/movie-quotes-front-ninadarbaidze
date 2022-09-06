import { useTranslation } from 'next-i18next';
import { useContext } from 'react';
import { UserContext } from 'store';

export const useDialog = () => {
  const userCtx = useContext(UserContext);
  const { t } = useTranslation();

  const dialogConfirmHandler = () => {
    userCtx.setDialog(false);
    userCtx.setPasswordSection(false);
    userCtx.setEditPassword(false);
  };
  return { userCtx, dialogConfirmHandler, t };
};
