import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { editProfileSchema } from 'schema';
import { useRouter } from 'next/router';

export const useProfileForm = () => {
  const { t } = useTranslation();

  // const router = useRouter();

  const onSubmit = async (values: any) => {
    try {
      console.log(values);
      // router.push(`/`);
    } catch (error) {
      throw new Error('Request failed!');
    }
  };

  const formik = useFormik({
    initialValues: {
      photo: '',
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
