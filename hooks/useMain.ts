import { useSession } from 'next-auth/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { AuthContext } from 'store';

export const useMain = () => {
  const { t } = useTranslation();
  const ctx = useContext(AuthContext);
  const router = useRouter();
  const currLang = router.locale;
  const { status } = useSession();

  const startButtonHandler = () => {
    ctx.isLoggedIn || status === 'authenticated'
      ? router.push('/feed')
      : ctx.changeLoginModalState(true);
  };

  return { t, ctx, currLang, startButtonHandler };
};
