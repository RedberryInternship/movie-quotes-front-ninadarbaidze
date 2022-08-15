import { useRouter } from 'next/router';

export const useSingleImage = () => {
  const router = useRouter();

  return { router };
};
