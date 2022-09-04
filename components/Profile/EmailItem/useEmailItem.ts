import { useTranslation } from 'next-i18next';
import { EmailListObjectTypes } from 'types';

export const useEmailItem = (props: { email: string }) => {
  const { setEmailList, email } = props;
  const { t } = useTranslation();

  return { t };
};
