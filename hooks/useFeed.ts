import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { getQuotes } from 'services';
import { AuthContext, QuoteContext } from 'store';
import { QuotesListTypes } from 'types';

export const useFeed = () => {
  const router = useRouter();
  const ctx = useContext(AuthContext);
  const { status } = useSession();
  const quoteCtx = useContext(QuoteContext);
  const { data: session } = useSession();
  const [quotes, setQuotes] = useState<QuotesListTypes[]>([]);

  useEffect(() => {
    if (status === 'unauthenticated' && !ctx.isLoggedIn) {
      router.push('/');
    }
  }, [ctx.isLoggedIn, router, status]);

  useEffect(() => {
    const getData = async () => {
      let token = session ? session.accessToken : ctx.token;
      const response = await getQuotes(token as string);
      setQuotes(response.data);
    };
    getData();
  }, [ctx.token, session]);
  console.log(quotes);

  return { router, ctx, status, quoteCtx, quotes };
};
