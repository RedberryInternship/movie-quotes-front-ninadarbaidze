import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthContext } from 'store';

export const useMobileMenu = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { data: session } = useSession();
  const ctx = useContext(AuthContext);
  const movieIconState = router.pathname.includes('movies');
  const homeIconState = router.pathname.endsWith('feed');

  const logoutHandler = () => {
    if (session) {
      signOut();
    } else {
      ctx.logoutHandler();
    }
    router.push('/');
  };

  return { t, movieIconState, homeIconState, logoutHandler };
};
