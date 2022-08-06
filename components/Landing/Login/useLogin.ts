import { useContext } from 'react';
import { useFormik } from 'formik';
import { loginSchema } from 'schema';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { AuthContext } from 'store';
import { login } from 'services';

export const useLogin = () => {
  const ctx = useContext(AuthContext);
  const changeLoginState = ctx.changeLoginModalState;
  const changeSignUpState = ctx.changeRegistrationModalState;
  const changePasswordRecoveryState = ctx.changePasswordRecoveryState;
  const { t } = useTranslation();

  const router = useRouter();

  const onSubmit = async (values: any) => {
    try {
      await login(values);
      router.push(`/`);
      ctx.changeRegistrationModalState(false);
    } catch (error) {
      throw new Error('Request failed!');
    }
  };

  const formik = useFormik({
    initialValues: {
      user: '',
      password: '',
      remember: false,
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
    handlePopupState,
    handlePasswordPopupState,
  };
};
