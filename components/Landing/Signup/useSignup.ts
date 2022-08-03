import { useContext } from 'react';
import { useFormik } from 'formik';
import { registrationSchema } from 'schema';
import { useTranslation } from 'react-i18next';
import { signup } from 'services';
import { useRouter } from 'next/router';
import { AuthContext } from 'store';

export const useSignUp = () => {
  const ctx = useContext(AuthContext);
  const authModalState = ctx.authModalState;
  const { t } = useTranslation();

  const router = useRouter();

  const onSubmit = async (values: any) => {
    try {
      await signup(values);
      router.push(`/?modal=email-sent`);
      ctx.changeRegistrationModalState(false);
    } catch (error) {
      throw new Error('Request failed!');
    }
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
    onSubmit: onSubmit,
    validationSchema: registrationSchema,
  });

  return { formik, authModalState, t };
};
