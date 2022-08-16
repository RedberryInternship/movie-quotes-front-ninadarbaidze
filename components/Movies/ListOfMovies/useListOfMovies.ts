import { useContext, useState } from 'react';
import { MovieContext, AuthContext } from 'store';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

export const useListOfMovies = () => {
  const movieCtx = useContext(MovieContext);
  const { t } = useTranslation();
  const ctx = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [movieSum, setMovieSum] = useState<number>(0);
  const router = useRouter();
  const { data: session } = useSession();

  const openMovieForm = () => {
    movieCtx.movieCreationStateHandler();
  };

  return {
    movieCtx,
    t,
    ctx,
    data,
    movieSum,
    router,
    session,
    openMovieForm,
    setMovieSum,
    setData,
  };
};
