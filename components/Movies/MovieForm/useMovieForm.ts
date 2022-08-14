import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { AuthContext, MovieContext } from 'store';
import { useContext } from 'react';
import { FormValues } from './types';
import { useSession } from 'next-auth/react';
import { addMovie } from 'services';
import { replace } from 'formik';
import { movieSchema } from 'schema';

export const useMovieForm = () => {
  const { t } = useTranslation();
  const ctx = useContext(AuthContext);
  const movieCtx = useContext(MovieContext);
  const { data: session } = useSession();
  const router = useRouter();

  const genres = [
    {
      label: `${t('genres:Drama')}`,
      value: 'Drama',
    },
    {
      label: `${t('genres:Western')}`,
      value: 'Western',
    },
    {
      label: `${t('genres:Romance')}`,
      value: 'Romance',
    },
    {
      label: `${t('genres:Horror')}`,
      value: 'Horror',
    },
    {
      label: `${t('genres:Fantasy')}`,
      value: 'Fantasy',
    },
    {
      label: `${t('genres:Action')}`,
      value: 'Action',
    },
    {
      label: `${t('genres:Comedy')}`,
      value: 'Comedy',
    },
    {
      label: `${t('genres:Thriller')}`,
      value: 'Thriller',
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
    date: '',
  };

  const onSubmit = async (values: any) => {
    const userId: any = session ? session.userId : ctx.userId;
    const token: any = session ? session.accessToken : ctx.token;
    const formData = new FormData();
    const keys = Object.keys(values);

    keys.forEach((key: string) => {
      formData.append(`${key}`, values[key as keyof typeof values]);
    });
    formData.append('userId', userId);
    try {
      await addMovie(formData, token);
      router.replace('/feed/movies');
      movieCtx.MovieCreationStateHandler();
    } catch (error: any) {
      throw new Error('Request failed!');
    }
  };

  return { t, genres, onSubmit, defaultValues };
};
