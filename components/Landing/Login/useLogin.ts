import { useContext, useState } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { AuthContext } from 'store';
import { login } from 'services';
import { loginTypes } from 'types';
import { loginSchema } from 'schema';

export const useLogin = () => {
  const ctx = useContext(AuthContext);
  const changeLoginState = ctx.changeLoginModalState;
  const changeSignUpState = ctx.changeRegistrationModalState;
  const changePasswordRecoveryState = ctx.changePasswordRecoveryState;
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const router = useRouter();

  const onSubmit = async (values: loginTypes) => {
    try {
      const response = await login(values);
      ctx.loginHandler(
        response.data.token as string,
        response.data.userId as string
      );
      router.push(`/feed`);
      ctx.changeRegistrationModalState(false);
      ctx.changeLoginModalState(false);
    } catch (error: any) {
      setError(error.response.status);
      throw new Error('Request failed!');
    }
  };

  const formik = useFormik({
    initialValues: {
      user: 'user',
      password: 'user',
      remember: true,
    },
    onSubmit: onSubmit,
    validationSchema: loginSchema,
  });

  const handlePopupState = () => {
    changeLoginState(false);
    changeSignUpState(true);
  };

  const handlePasswordPopupState = () => {
    changeLoginState(false);
    changeSignUpState(false);
    changePasswordRecoveryState(true);
  };

  return {
    formik,
    t,
    error,
    handlePopupState,
    handlePasswordPopupState,
  };
};
