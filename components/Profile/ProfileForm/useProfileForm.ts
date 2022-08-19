import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { editProfileSchema } from 'schema';
import { useRouter } from 'next/router';
import { updateProfile } from 'services';
import { AuthContext, UserContext } from 'store';
import { useContext, useRef } from 'react';
import { useSession } from 'next-auth/react';
import { ProfileInfoTypes } from './types';

export const useProfileForm = () => {
  const { t } = useTranslation();
  const ctx = useContext(AuthContext);
  const userCtx = useContext(UserContext);
  const { data: session } = useSession();
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);

  const changeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    imageChangeHandler: (imageSrc: string) => void
  ) => {
    formik.setFieldValue('image', event.currentTarget.files![0]);
    const imageSrc = URL.createObjectURL(event.target.files![0]);
    imageChangeHandler(imageSrc);
  };

  const onSubmit = async (values: ProfileInfoTypes) => {
    const userId: string | unknown = session ? session.userId : ctx.userId;
    const token: string | unknown = session ? session.accessToken : ctx.token;
    const formData = new FormData();
    const keys = Object.keys(values);

    keys.forEach((key: string) => {
      formData.append(`${key}`, values[key as keyof typeof values]);
    });
    formData.append('userId', userId as string);

    try {
      await updateProfile(formData, token as string);
      router.push(`/feed`);
    } catch (error: any) {
      throw new Error('Request failed!');
    }
  };

  const formik = useFormik({
    initialValues: {
      image: '',
      username: userCtx.userState.username || '',
      email: userCtx.userState.email || '',
      password: '',
      repeatPassword: '',
    },
    enableReinitialize: true,
    onSubmit: onSubmit,
    validationSchema: editProfileSchema,
  });

  return { formik, t, fileRef, changeHandler };
};
