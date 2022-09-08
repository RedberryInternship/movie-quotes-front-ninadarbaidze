import { useContext } from 'react';
import { AuthContext } from 'store';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

const useHeader = () => {
  const { t } = useTranslation();
  const ctx = useContext(AuthContext);
  const router = useRouter();
  const { status } = useSession();

  const changeRegistrationModalState = () => {
    ctx.isLoggedIn || status === 'authenticated'
      ? router.push('/feed')
      : ctx.changeRegistrationModalState(true);
  };
  const changeLoginModalState = () => {
    ctx.isLoggedIn || status === 'authenticated'
      ? router.push('/feed')
      : ctx.changeLoginModalState(true);
  };

  return { t, changeRegistrationModalState, changeLoginModalState, router };
};

export default useHeader;
