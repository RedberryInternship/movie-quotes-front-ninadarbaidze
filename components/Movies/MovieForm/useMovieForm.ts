import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { movieFormSchema } from 'schema';
import { useRouter } from 'next/router';
import { AuthContext, UserContext } from 'store';
import { useContext, useRef } from 'react';
import { useSession } from 'next-auth/react';

export const useMovieForm = () => {
  const { t } = useTranslation();
  const ctx = useContext(AuthContext);
  const userCtx = useContext(UserContext);
  const { data: session } = useSession();
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);

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

  const changeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    imageChangeHandler: (imageSrc: string) => void
  ) => {
    formik.setFieldValue('image', event.currentTarget.files![0]);
    const imageSrc = URL.createObjectURL(event.target.files[0]);
    imageChangeHandler(imageSrc);
  };

  const onSubmit = async (values: any) => {
    try {
      console.log(values);
    } catch (error) {
      throw new Error('Request failed!');
    }
  };

  const formik = useFormik({
    initialValues: {
      genre: [],
    },
    enableReinitialize: true,
    onSubmit: onSubmit,
    validationSchema: movieFormSchema,
  });

  return { formik, t, fileRef, changeHandler, genres, onSubmit };
};
