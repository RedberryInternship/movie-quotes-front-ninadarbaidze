import { useContext } from 'react';
import { UserContext } from 'store';

export const usePosts = () => {
  const userCtx = useContext(UserContext);

  return { userCtx };
};
