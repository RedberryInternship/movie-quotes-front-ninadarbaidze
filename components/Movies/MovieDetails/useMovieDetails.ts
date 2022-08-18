import { useContext, useEffect, useState } from 'react';
import { MovieStateTypes } from 'types';
import { useTranslation } from 'next-i18next';
import { useSession } from 'next-auth/react';
import { AuthContext, MovieContext } from 'store';
import { deleteMovie, getMovieById } from 'services';
import { useRouter } from 'next/router';

export const useMovieDetails = (props: { data: MovieStateTypes }) => {
  const { data } = props;
  const { t } = useTranslation();
  const { data: session } = useSession();
  const ctx = useContext(AuthContext);
  const movieCtx = useContext(MovieContext);
  const router = useRouter();
  let genresArray = data.genres[0].split(',');
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const movieId = router.query.movieId;
      try {
        const response = await getMovieById(movieId as string);
        movieCtx.getMovie(response.data.movie);
      } catch (err: any) {}
    };
    getData();
  }, [router.query.movieId]);

  const deleteMovieHandler = async () => {
    const token: string | unknown = session ? session.accessToken : ctx.token;

    try {
      const movieId = { movieId: router.query.movieId };
      setOpenDeleteModal(false);
      await deleteMovie(token as string, movieId as unknown as string);
      router.replace(`/feed/movies`);
    } catch (err: any) {}
  };

  const cancelDeleteHandler = () => {
    setOpenDeleteModal(false);
  };

  const editMovieHandler = () => {
    movieCtx.movieEditingStateHandler(true);
  };

  const myLoader = () => {
    return `${process.env.NEXT_PUBLIC_API_URL}/${data.image}`;
  };
  return {
    t,
    session,
    ctx,
    router,
    genresArray,
    openDeleteModal,
    myLoader,
    cancelDeleteHandler,
    editMovieHandler,
    movieCtx,
    deleteMovieHandler,
    setOpenDeleteModal,
  };
};
