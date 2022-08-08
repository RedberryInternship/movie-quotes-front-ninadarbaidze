import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { editProfileSchema } from 'schema';
// import { useRouter } from 'next/router';
import { updateProfile } from 'services';
import { UserContext } from 'store';
import { useContext } from 'react';

export const useProfileForm = () => {
  const { t } = useTranslation();
  const ctx = useContext(UserContext);

  // const router = useRouter();

  const onSubmit = async (values: any) => {
    const formData = new FormData();
    formData.append('image', values.image);
    formData.append('username', values.username);
    formData.append('email', values.email);
    formData.append('password', values.password);

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
      username: ctx.userState.username || '',
      email: ctx.userState.email || '',
      password: '',
      repeatPassword: '',
    },
    enableReinitialize: true,
    onSubmit: onSubmit,
    validationSchema: editProfileSchema,
  });

  return { formik, t };
};
