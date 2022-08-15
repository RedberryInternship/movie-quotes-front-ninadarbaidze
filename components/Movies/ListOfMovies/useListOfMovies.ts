import { useContext, useState } from 'react';
import { MovieTypes } from './types';
import { MovieContext, AuthContext } from 'store';
import { getMovies } from 'services';
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

  const getData = async (lan: string | undefined) => {
    let token = session ? session.accessToken : ctx.token;
    try {
      const response = await getMovies(token as string);
      const movieNumber = response.data.length;
      const newData = response.data.map((movies: MovieTypes) => {
        return {
          id: movies._id,
          movieName: movies[lan!].movieName,
          year: movies.year,
          image: movies.image,
        };
      });
      setMovieSum(movieNumber);
      setData(newData);
    } catch (err: any) {
      console.log(err);
    }
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
    getData,
  };
};
