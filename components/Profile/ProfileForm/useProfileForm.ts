import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { editProfileSchema } from 'schema';
import { useRouter } from 'next/router';
import { updateProfile } from 'services';
import { AuthContext, UserContext } from 'store';
import { useContext } from 'react';
import { useSession } from 'next-auth/react';
import { ProfileInfoTypes } from './types';

export const useProfileForm = () => {
  const { t } = useTranslation();
  const ctx = useContext(AuthContext);
  const userCtx = useContext(UserContext);
  const { data: session } = useSession();
  const router = useRouter();

  const onSubmit = async (values: ProfileInfoTypes) => {
    console.log(values);
    const userId: any = session ? session.userId : ctx.userId;
    const token: any = session ? session.accessToken : ctx.token;
    const formData = new FormData();
    const keys = Object.keys(values);

    keys.forEach((key: string) => {
      formData.append(`${key}`, values[key]);
    });
    formData.append('userId', userId);

    try {
      await updateProfile(formData, token);
      router.push(`/feed`);
    } catch (error) {
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

  return { formik, t };
};
