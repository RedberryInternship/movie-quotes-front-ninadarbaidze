import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

export const useMobileMenu = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const movieIconState = router.pathname.includes('movies');
  const homeIconState = router.pathname.endsWith('feed');

  return { t, movieIconState, homeIconState };
};
