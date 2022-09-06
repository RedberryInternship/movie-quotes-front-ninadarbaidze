import { useTranslation } from 'next-i18next';
import * as Yup from 'yup';

const useSignupSchema = () => {
  const { t } = useTranslation();

  const registrationSchema = Yup.object({
    username: Yup.string()
      .min(3, `${t('home:min3')}`)
      .max(15, `${t('home:max15')}`)
      .required(`${t('home:usernameRequired')}`)
      .matches(/^[a-z0-9]+$/g, `${t('home:validUsername')}`),
    email: Yup.string()
      .required(`${t('home:emailRequired')}`)
      .email(`${t('home:invalidEmail')}`),
    password: Yup.string()
      .lowercase(`${t('home:lowercase')}`)
      .required(`${t('home:passRequired')}`)
      .min(8, `${t('home:min8')}`)
      .matches(/^[a-z0-9]+$/g, `${t('home:validPass')}`)
      .max(15, `${t('home:max15')}`),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], `${t('home:passwordDontMatch')}`)
      .required(`${t('home:passRequired')}`),
  });
  return { registrationSchema };
};

export default useSignupSchema;
