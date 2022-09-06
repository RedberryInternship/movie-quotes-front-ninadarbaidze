import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

const useLoginSchema = () => {
  const { t } = useTranslation();

  const loginSchema = Yup.object({
    user: Yup.string()
      .required(`${t('home:userRequired')}`)
      .min(3, `${t('home:min3')}`),
    password: Yup.string()
      .lowercase()
      .required(`${t('home:passRequired')}`)
      .min(8, `${t('home:min8')}`)
      .matches(/^[a-z0-9]+$/g, `${t('home:validPass')}`)
      .max(15, `${t('home:max15')}`),
  });
  return { loginSchema };
};

export default useLoginSchema;
