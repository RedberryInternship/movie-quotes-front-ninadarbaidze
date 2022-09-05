import { useContext } from 'react';
import { UserContext } from 'store';

export const useErrorPopup = () => {
  const userCtx = useContext(UserContext);
  return { userCtx };
};
