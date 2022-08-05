import { useContext } from 'react';
import { useFormik } from 'formik';
import { updatePasswordSchema } from 'schema';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { AuthContext } from 'store';
import { passwordRecovery } from 'services';

export const useUpdatePassword = () => {
  const ctx = useContext(AuthContext);
  const { t } = useTranslation();

  const router = useRouter();

  const onSubmit = async (values: any) => {
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
      password: '',
      repeatPassword: '',
    },
    onSubmit: onSubmit,
    validationSchema: updatePasswordSchema,
  });

  return { formik, t };
};
