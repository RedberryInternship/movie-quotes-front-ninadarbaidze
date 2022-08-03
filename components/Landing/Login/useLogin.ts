import { useContext } from 'react';
import { useFormik } from 'formik';
import { loginSchema } from 'schema';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { AuthContext } from 'store';

export const useLogin = () => {
  const ctx = useContext(AuthContext);
  const authModalState = ctx.loginModalState;
  const { t } = useTranslation();

  const router = useRouter();

  const onSubmit = async (values: any) => {
    try {
      console.log(values);
      router.push(`/`);
      ctx.changeRegistrationModalState(false);
    } catch (error) {
      throw new Error('Request failed!');
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: false,
    },
    onSubmit: onSubmit,
    validationSchema: loginSchema,
  });

  return { formik, authModalState, t };
};
