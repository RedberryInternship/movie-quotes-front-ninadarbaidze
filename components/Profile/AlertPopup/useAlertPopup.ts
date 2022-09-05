import { useContext } from 'react';
import { UserContext } from 'store';

export const useAlertPopup = () => {
  const userCtx = useContext(UserContext);
  return { userCtx };
};
