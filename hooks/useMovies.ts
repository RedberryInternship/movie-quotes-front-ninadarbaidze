import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { AuthContext, MovieContext } from 'store';

export const useMovies = () => {
  const router = useRouter();
  const ctx = useContext(AuthContext);
  const movieCtx = useContext(MovieContext);
  const { status } = useSession();

  return { router, ctx, movieCtx, status };
};
