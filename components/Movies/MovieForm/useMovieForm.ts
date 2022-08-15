import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { AuthContext, MovieContext } from 'store';
import { useContext } from 'react';
import { FormValues } from './types';
import { useSession } from 'next-auth/react';
import { addMovie } from 'services';

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

  const defaultValues: FormValues = {
    genre: [],
    movieNameEN: '',
    movieNameGE: '',
    directorEN: '',
    directorGE: '',
    descriptionEN: '',
    descriptionGE: '',
    image: '',
    budget: null,
    year: null,
  };

  const onSubmit = async (values: FormValues) => {
    const userId: string | Blob | any = session ? session.userId : ctx.userId;
    const token: string | Blob | any = session
      ? session.accessToken
      : ctx.token;
    const formData = new FormData();
    const keys = Object.keys(values);

    keys.forEach((key: string) => {
      formData.append(`${key}`, values[key]);
    });
    formData.append('userId', userId);
    try {
      await addMovie(formData, token);
      router.replace('/feed/movies');
      movieCtx.movieCreationStateHandler();
      movieCtx.getMoviesRefresh();
    } catch (error: any) {
      throw new Error('Request failed!');
    }
  };

  return { t, genres, onSubmit, defaultValues };
};
