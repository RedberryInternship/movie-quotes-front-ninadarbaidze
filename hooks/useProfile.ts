import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { AuthContext, UserContext } from 'store';

export const useProfile = () => {
  const router = useRouter();
  const ctx = useContext(AuthContext);
  const userCtx = useContext(UserContext);
  const { status } = useSession();

  useEffect(() => {
    if (status === 'unauthenticated' && !ctx.isLoggedIn) {
      router.push('/');
    }
  }, [ctx.isLoggedIn, router, status]);

  return { router, ctx, status, userCtx };
};
