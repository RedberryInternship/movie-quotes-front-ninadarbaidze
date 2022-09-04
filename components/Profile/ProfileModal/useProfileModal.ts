import { useFormik } from 'formik';
import { useTranslation } from 'next-i18next';
import { useContext, useState } from 'react';
import { profileSchema } from 'schema';
import { UserContext } from 'store';
import { EmailListObjectTypes, ModalTypes } from 'types';

export const useProfileModal = (props: {
  setEmailList: React.Dispatch<React.SetStateAction<EmailListObjectTypes[]>>;
}) => {
  const { setEmailList } = props;
  const userCtx = useContext(UserContext);
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const onSubmit = async (values: ModalTypes) => {
    try {
      userCtx.editInputState === 'username' &&
        userCtx.getUser({ username: values.username });
      userCtx.editInputState === 'email' && addEmail(values.email as string);

      userCtx.setDialog(false);
      userCtx.setFormModal(false);
    } catch (error: any) {
      setError(error.response.status);
      throw new Error('Request failed!');
    }
  };

  const addEmail = (value: string) => {
    setEmailList((prevState) => {
      let updatedEmailList: EmailListObjectTypes[] = [];
      const data = {
        email: value,
        primary: false,
        verified: false,
      };
      updatedEmailList = [...prevState];
      updatedEmailList.push(data);
      return updatedEmailList;
    });
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      // newPassword: '',
    },
    onSubmit: onSubmit,
    validationSchema: profileSchema,
  });

  return {
    formik,
    t,
    error,
    userCtx,
  };
};
