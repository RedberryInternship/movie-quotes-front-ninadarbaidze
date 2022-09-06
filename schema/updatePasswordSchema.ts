import { useTranslation } from 'next-i18next';
import * as Yup from 'yup';

const useUpdatePasswordSchema = () => {
  const { t } = useTranslation();

  const updatePasswordSchema = Yup.object({
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

  return { updatePasswordSchema };
};

export default useUpdatePasswordSchema;
