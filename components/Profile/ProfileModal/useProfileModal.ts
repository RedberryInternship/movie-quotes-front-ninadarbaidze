import { useFormik } from 'formik';
import { useTranslation } from 'next-i18next';
import { useContext, useState } from 'react';
import { profileSchema } from 'schema';
import { UserContext } from 'store';
import { EmailListObjectTypes, ModalTypes } from 'types';

export const useProfileModal = (props: {
  setEmailList: React.Dispatch<React.SetStateAction<EmailListObjectTypes[]>>;
  emailList: EmailListObjectTypes[];
}) => {
  const { setEmailList, emailList } = props;
  const userCtx = useContext(UserContext);
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const onSubmit = async (values: ModalTypes) => {
    try {
      if (userCtx.editInputState === 'username') {
        userCtx.getUser({ username: values.username });
        userCtx.setSuccessPopup('Username change requested');
      }

      if (userCtx.editInputState === 'email') {
        const existingEmail = emailList.find(
          (email) => email.email === values.email
        );
        existingEmail
          ? userCtx.setErrorPopup('You already have this email')
          : addEmail(values.email as string);
      }
      userCtx.setDialog(false);
      userCtx.setFormModal(false);
    } catch (error: any) {
      setError(error.response.status);
      userCtx.setErrorPopup(error.response.data.message);
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
    userCtx.setSuccessPopup('New email is added');
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
