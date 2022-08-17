import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { AuthContext } from 'store';

export const useMovieDetail = () => {
  const router = useRouter();
  const ctx = useContext(AuthContext);
  const { status } = useSession();

  return { router, ctx, status };
};
