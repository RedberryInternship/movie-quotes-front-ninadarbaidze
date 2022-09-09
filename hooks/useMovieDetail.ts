import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { AuthContext, UserContext } from 'store';

export const useMovieDetail = () => {
  const router = useRouter();
  const ctx = useContext(AuthContext);
  const userCtx = useContext(UserContext);
  const { status } = useSession();

  useEffect(() => {
    if (status === 'unauthenticated' && !ctx.isLoggedIn) {
      userCtx.setLoader(true);
      router.push('/');
    } else {
      userCtx.setLoader(false);
    }
  }, [ctx.isLoggedIn, router, status]);

  return { router, ctx, status, userCtx };
};
