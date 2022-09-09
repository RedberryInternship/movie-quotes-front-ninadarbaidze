import { useRouter } from 'next/router';

export const useError = () => {
  const router = useRouter();
  return { router };
};
