import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { AuthContext, MovieContext } from 'store';
import { useContext } from 'react';
import { FormValues } from './types';
import { useSession } from 'next-auth/react';
import { addMovie, editMovie } from 'services';

export const useMovieForm = () => {
  const { t } = useTranslation();
  const ctx = useContext(AuthContext);
  const movieCtx = useContext(MovieContext);
  const { data: session } = useSession();
  const router = useRouter();

  const genres = [
    {
      label: `${t('genres:Drama')}`,
      value: 'genres:Drama',
    },
    {
      label: `${t('genres:Western')}`,
      value: 'genres:Western',
    },
    {
      label: `${t('genres:Romance')}`,
      value: 'genres:Romance',
    },
    {
      label: `${t('genres:Horror')}`,
      value: 'genres:Horror',
    },
    {
      label: `${t('genres:Fantasy')}`,
      value: 'genres:Fantasy',
    },
    {
      label: `${t('genres:Action')}`,
      value: 'genres:Action',
    },
    {
      label: `${t('genres:Comedy')}`,
      value: 'genres:Comedy',
    },
    {
      label: `${t('genres:Thriller')}`,
      value: 'genres:Thriller',
    },
  ];

  const isMovieEdited = movieCtx.isMovieEdited;
  const movieState = movieCtx.movieState;

  const defaultValues: FormValues = {
    genre: isMovieEdited ? movieState.genres[0].split(',') : [],
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
    console.log(values);
    const userId: string | Blob | any = session ? session.userId : ctx.userId;
    const token: string | Blob | any = session
      ? session.accessToken
      : ctx.token;
    const movieId = router.query.movieId;
    const formData = new FormData();
    const keys = Object.keys(values);

    keys.forEach((key: string) => {
      formData.append(`${key}`, values[key]);
    });
    formData.append('userId', userId);
    try {
      if (!movieCtx.isMovieEdited) {
        await addMovie(formData, token);
        movieCtx.movieCreationStateHandler();
      } else {
        await editMovie(formData, token, movieId);
        movieCtx.movieEditingStateHandler(false);
      }
      router.replace('/feed/movies');
      movieCtx.getMoviesRefresh();
    } catch (error: any) {
      throw new Error('Request failed!');
    }
  };

  return { t, genres, onSubmit, defaultValues, movieCtx };
};
