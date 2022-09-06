import { useTranslation } from 'next-i18next';
import * as Yup from 'yup';

const useForgotPasswordSchema = () => {
  const { t } = useTranslation();

  const forgotPasswordSchema = Yup.object({
    email: Yup.string()
      .required(`${t('home:emailRequired')}`)
      .email(`${t('home:invalidEmail')}`),
  });
  return { forgotPasswordSchema };
};

export default useForgotPasswordSchema;
