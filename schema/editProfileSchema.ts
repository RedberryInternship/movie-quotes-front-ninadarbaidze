import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

const useEditProfileSchema = () => {
  const { t } = useTranslation();

  const editProfileSchema = Yup.object({
    username: Yup.string()
      .min(3, `${t('home:min3')}`)
      .required(`${t('home:commonRequired')}`),
    email: Yup.string().email(`${t('home:invalidEmail')}`),
    newPassword: Yup.string()
      .min(8, `${t('home:min8')}`)
      .matches(/^[a-z0-9]+$/g, `${t('home:validPass')}`)
      .max(15, `${t('home:max15')}`),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], `${t('home:passwordDontMatch')}`)
      .required(`${t('home:passRequired')}`),
  });
  return { editProfileSchema };
};
export default useEditProfileSchema;
