import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { AuthContext } from 'store';

export const useQuotes = () => {
  const router = useRouter();
  const ctx = useContext(AuthContext);
  const { status } = useSession();

  useEffect(() => {
    router.replace('/feed');
  }, [ctx.isLoggedIn, router, status]);

  return { router, ctx, status };
};
