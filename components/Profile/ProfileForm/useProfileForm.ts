import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { editProfileSchema } from 'schema';
// import { useRouter } from 'next/router';
import { updateProfile } from 'services';

export const useProfileForm = () => {
  const { t } = useTranslation();

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
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
    onSubmit: onSubmit,
    validationSchema: editProfileSchema,
  });

  return { formik, t };
};
