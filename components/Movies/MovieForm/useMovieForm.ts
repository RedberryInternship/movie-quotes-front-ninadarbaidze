import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { AuthContext, MovieContext } from 'store';
import { useContext, useEffect, useState } from 'react';
import { FormValues } from './types';
import { useSession } from 'next-auth/react';
import { addMovie, editMovie, getGenres } from 'services';

export const useMovieForm = () => {
  const { t } = useTranslation();
  const ctx = useContext(AuthContext);
  const movieCtx = useContext(MovieContext);
  const { data: session } = useSession();
  const router = useRouter();
  const [genres, setGenres] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getGenres();
        const updatedGenres = response.data.map(
          (genre: { label: string; value: string }) => ({
            label: `${t(`genres:${genre.label}`)}`,
            value: genre.value,
          })
        );
        setGenres(updatedGenres);
      } catch (err) {}
    };

    getData();
  }, [t]);

  const isMovieEdited = movieCtx.isMovieEdited;
  const movieState = movieCtx.movieState;

  const defaultValues: FormValues = {
    genre: isMovieEdited ? movieState.genres![0].split(',') : [],
    movieNameEN: isMovieEdited ? movieState.en.movieName : '',
    movieNameGE: isMovieEdited ? movieState.ge.movieName : '',
    directorEN: isMovieEdited ? movieState.en.director : '',
    directorGE: isMovieEdited ? movieState.ge.director : '',
    descriptionEN: isMovieEdited ? movieState.en.description : '',
    descriptionGE: isMovieEdited ? movieState.ge.description : '',
    image: isMovieEdited ? movieState.image : '',
    budget: isMovieEdited ? movieState.budget : '',
    year: isMovieEdited ? movieState.budget : '',
  };

  const onSubmit = async (values: FormValues) => {
    const userId: string | Blob | unknown = session
      ? session.userId
      : ctx.userId;
    const token: string | Blob | unknown = session
      ? session.accessToken
      : ctx.token;
    const movieId = router.query.movieId;
    const formData = new FormData();
    const keys = Object.keys(values);

    keys.forEach((key: string) => {
      formData.append(`${key}`, values[key as keyof FormValues]);
    });
    formData.append('userId', userId as string);
    try {
      if (!movieCtx.isMovieEdited) {
        await addMovie(formData, token as string);
        movieCtx.movieCreationStateHandler();
        router.replace('/feed/movies');
      } else {
        await editMovie(formData, token as string, movieId);
        movieCtx.movieEditingStateHandler(false);
        router.replace(`/feed/movies/${movieId}`);
      }
      movieCtx.getMoviesRefresh();
    } catch (error: any) {
      throw new Error('Request failed!');
    }
  };

  return { t, genres, onSubmit, defaultValues, movieCtx };
};
