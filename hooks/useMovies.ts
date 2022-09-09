import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { AuthContext, MovieContext, UserContext } from 'store';

export const useMovies = () => {
  const router = useRouter();
  const ctx = useContext(AuthContext);
  const userCtx = useContext(UserContext);
  const movieCtx = useContext(MovieContext);
  const { status } = useSession();
  const currLang = router.locale;

  useEffect(() => {
    if (status === 'unauthenticated' && !ctx.isLoggedIn) {
      userCtx.setLoader(true);
      router.push('/');
    } else {
      userCtx.setLoader(false);
    }
  }, [ctx.isLoggedIn, router, status]);

  return { router, ctx, movieCtx, status, currLang, userCtx };
};
