import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { AuthContext, QuoteContext } from 'store';

export const useFeed = () => {
  const router = useRouter();
  const ctx = useContext(AuthContext);
  const { status } = useSession();
  const quoteCtx = useContext(QuoteContext);

  useEffect(() => {
    if (status === 'unauthenticated' && !ctx.isLoggedIn) {
      router.push('/');
    }
  }, [ctx.isLoggedIn, router, status]);

  return { router, ctx, status, quoteCtx };
};
