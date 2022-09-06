import { useContext } from 'react';
import { useFormik } from 'formik';
import { useForgotPasswordSchema } from 'schema';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { AuthContext } from 'store';
import { passwordRecovery } from 'services';
import { PasswordRecoveryTypes } from 'types';

export const useForgotPassword = () => {
  const ctx = useContext(AuthContext);
  const { t } = useTranslation();
  const loginState = ctx.changeLoginModalState;
  const forgotPassState = ctx.changePasswordRecoveryState;
  const { forgotPasswordSchema } = useForgotPasswordSchema();

  const router = useRouter();

  const onSubmit = async (values: PasswordRecoveryTypes) => {
    try {
      await passwordRecovery(values);
      router.push(`/?modal=password-recovery-email-sent`);
      ctx.changePasswordRecoveryState(false);
    } catch (error) {
      throw new Error('Request failed!');
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: onSubmit,
    validationSchema: forgotPasswordSchema,
  });

  const backToLoginHandler = () => {
    loginState(true);
    forgotPassState(false);
  };

  return { formik, t, loginState, forgotPassState, backToLoginHandler };
};
