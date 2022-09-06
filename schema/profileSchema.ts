import { useTranslation } from 'next-i18next';
import * as Yup from 'yup';

const useProfileSchema = () => {
  const { t } = useTranslation();

  const profileSchema = Yup.object({
    username: Yup.string().min(3, `${t('home:min3')}`),
    email: Yup.string().email(`${t('home:invalidEmail')}`),
  });
  return { profileSchema };
};

export default useProfileSchema;
