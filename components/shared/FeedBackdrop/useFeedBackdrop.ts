import { useContext } from 'react';
import { UserContext } from 'store';

export const useFeedBackdrop = () => {
  const userCtx = useContext(UserContext);
  return { userCtx };
};
