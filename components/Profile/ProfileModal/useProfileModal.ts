import { UpdatedMovieTypes } from 'components/Movies/ListOfMovies/types';
import { useFormik } from 'formik';
import { t } from 'i18next';
import { useTranslation } from 'next-i18next';
import error from 'next/error';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { profileSchema } from 'schema';
import { login } from 'services';
import { AuthContext, UserContext } from 'store';
import { EmailListObjectTypes, ModalTypes } from 'types';

export const useProfileModal = (props: {
  setEmailList: (arg0: EmailListObjectTypes) => void;
}) => {
  const { setEmailList } = props;
  const userCtx = useContext(UserContext);
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const onSubmit = async (values: ModalTypes) => {
    try {
      userCtx.editInputState === 'username' &&
        userCtx.getUser({ username: values.username });
      userCtx.editInputState === 'email' && addEmail(values.email);

      userCtx.setDialog(false);
      userCtx.setFormModal(false);
    } catch (error: any) {
      setError(error.response.status);
      throw new Error('Request failed!');
    }
  };

  const addEmail = (value) => {
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
