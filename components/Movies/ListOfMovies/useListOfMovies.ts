import { useContext, useState } from 'react';
import { MovieContext, AuthContext } from 'store';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { getMovies } from 'services';
import { MovieTypes } from './types';

export const useListOfMovies = () => {
  const movieCtx = useContext(MovieContext);
  const { t } = useTranslation();
  const ctx = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [movieSum, setMovieSum] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const { data: session } = useSession();

  const onChange = (event: { target: { value: string } }) => {
    setSearchQuery(event.target.value);
  };

  const getData = async () => {
    let currentLan = router.locale;
    let token = session ? session.accessToken : ctx.token;
    try {
      const response = await getMovies(token as string);
      const movieNumber = response.data.length;
      const newData = response.data.map((movies: MovieTypes) => {
        return {
          id: movies._id,
          movieName: movies[currentLan!].movieName,
          year: movies.year,
          image: movies.image,
        };
      });
      setMovieSum(movieNumber);
      setData(newData);
    } catch (err: any) {}
  };

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
    getData,
    searchQuery,
    onChange,
  };
};
