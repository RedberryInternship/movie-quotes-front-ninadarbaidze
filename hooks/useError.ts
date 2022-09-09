import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export const useError = () => {
  const router = useRouter();
  const { t } = useTranslation();
  return { router, t };
};
