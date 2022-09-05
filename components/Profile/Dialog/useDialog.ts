import { useContext } from 'react';
import { UserContext } from 'store';

export const useDialog = () => {
  const userCtx = useContext(UserContext);

  const dialogConfirmHandler = () => {
    userCtx.setDialog(false);
    userCtx.setPasswordSection(false);
    userCtx.setEditPassword(false);
  };
  return { userCtx, dialogConfirmHandler };
};
