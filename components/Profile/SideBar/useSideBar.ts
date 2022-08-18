import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

export const useSideBar = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const movieIconState = router.pathname.includes('movies');
  const homeIconState = router.pathname.endsWith('feed');
  const profileState = router.pathname.includes('profile');
  return {
    t,
    movieIconState,
    homeIconState,
    profileState,
  };
};
