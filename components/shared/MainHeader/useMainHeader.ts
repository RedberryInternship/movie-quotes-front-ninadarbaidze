import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthContext } from 'store';
import { signOut } from 'next-auth/react';

const useMainHeader = () => {
  const { t } = useTranslation();
  const ctx = useContext(AuthContext);
  const { data: session } = useSession();
  const router = useRouter();

  const logoutHandler = () => {
    if (session) {
      signOut();
    } else {
      ctx.logoutHandler();
    }
    router.push('/');
  };

  return { t, logoutHandler };
};

export default useMainHeader;
