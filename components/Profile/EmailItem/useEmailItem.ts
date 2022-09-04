import { useTranslation } from 'next-i18next';
import { EmailListObjectTypes } from 'types';

export const useEmailItem = (props: { email: string }) => {
  const { setEmailList, email } = props;
  const { t } = useTranslation();

  const deleteEmailHandler = () => {
    setEmailList((prevState) => {
      // let updatedEmailList: EmailListObjectTypes[] = [];
      // updatedEmailList = [...prevState];
      console.log(prevState);
      // let index = updatedEmailList.indexOf(email);
    });
  };

  const makeEmailPrimaryHandler = () => {};
  return { t, deleteEmailHandler };
};
