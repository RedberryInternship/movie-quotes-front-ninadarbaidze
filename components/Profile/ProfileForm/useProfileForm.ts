import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { editProfileSchema } from 'schema';
// import { useRouter } from 'next/router';
import { updateProfile } from 'services';
import { AuthContext, UserContext } from 'store';
import { useContext } from 'react';
import { useSession } from 'next-auth/react';

export const useProfileForm = () => {
  const { t } = useTranslation();
  const ctx = useContext(AuthContext);
  const userCtx = useContext(UserContext);
  const session = useSession();

  // const router = useRouter();

  const onSubmit = async (values: any) => {
    const userId: any = session.data ? session.data.userId : ctx.userId;
    const formData = new FormData();
    formData.append('image', values.image);
    formData.append('username', values.username);
    formData.append('email', values.email);
    formData.append('password', values.password);
    formData.append('userId', userId);

    try {
      await updateProfile(formData);
      // router.push(`/`);
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
