import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { editProfileSchema } from 'schema';
import { useRouter } from 'next/router';
import { sendVerificationEmail, updateProfile } from 'services';
import { AuthContext, UserContext } from 'store';
import { useContext, useRef, useState } from 'react';
import { useSession } from 'next-auth/react';
import { ProfileInfoTypes } from './types';
import { EmailListObjectTypes } from 'types';

export const useProfileForm = (props: {
  emailList: EmailListObjectTypes[];
  setEmailList: React.Dispatch<React.SetStateAction<EmailListObjectTypes[]>>;
}) => {
  const { emailList, setEmailList } = props;
  const { t } = useTranslation();
  const ctx = useContext(AuthContext);
  const userCtx = useContext(UserContext);
  const [editPassword, setEditPassword] = useState(false);
  const [error, setError] = useState('');
  const { data: session } = useSession();
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);

  const changeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    imageChangeHandler: (imageSrc: string) => void
  ) => {
    formik.setFieldValue('image', event.currentTarget.files![0]);
    const imageSrc = URL.createObjectURL(event.target.files![0]);
    imageChangeHandler(imageSrc);
  };

  const onSubmit = async (values: ProfileInfoTypes) => {
    const userId: string | unknown = session ? session.userId : ctx.userId;
    const token: string | unknown = session ? session.accessToken : ctx.token;
    const formData = new FormData();
    const keys = Object.keys(values);

    keys.forEach((key: string) => {
      formData.append(`${key}`, values[key as keyof typeof values]);
    });
    formData.append('userId', userId as string);
    formData.append('emails', JSON.stringify(emailList));

    try {
      await updateProfile(formData, token as string);
      const notVerifiedMails = emailList.filter(
        (email) => email.verified === false
      );
      const lastNotVerifiedMail =
        notVerifiedMails.length > 0 &&
        notVerifiedMails[notVerifiedMails.length - 1].email;
      await sendVerificationEmail({
        email: lastNotVerifiedMail,
      } as unknown as string);
      router.push(`/feed/profile`);
    } catch (error: any) {
      setError(error.response.data.message);
      throw new Error('Request failed!');
    }
  };

  const formik = useFormik({
    initialValues: {
      image: '',
      username: userCtx.userState.username || '',
      newPassword: '',
      repeatPassword: '',
    },
    enableReinitialize: true,
    onSubmit: onSubmit,
    validationSchema: editProfileSchema,
  });

  const onDeleteMail = (value: string) => {
    setEmailList((prevState) => {
      let index = [...prevState].map((emails) => emails.email).indexOf(value);
      const updatedEmailList = [...prevState];
      updatedEmailList.splice(index, 1);
      return updatedEmailList;
    });
  };
  const onMakePrimary = (value: string) => {
    setEmailList((prevState) => {
      const primaryIndex = [...prevState]
        .map((email) => email.primary === true)
        .indexOf(true);
      const newPrimaryIndex = [...prevState]
        .map((emails) => emails.email)
        .indexOf(value);
      const updatedList = [...prevState];
      updatedList[primaryIndex].primary = false;
      updatedList[newPrimaryIndex].primary = true;
      return updatedList;
    });
  };

  return {
    formik,
    t,
    fileRef,
    changeHandler,
    editPassword,
    setEditPassword,
    userCtx,
    error,
    onDeleteMail,
    onMakePrimary,
  };
};
