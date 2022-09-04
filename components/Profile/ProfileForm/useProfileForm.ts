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
}) => {
  const { emailList } = props;
  const { t } = useTranslation();
  const ctx = useContext(AuthContext);
  const userCtx = useContext(UserContext);
  const [editPassword, setEditPassword] = useState(false);
  const [error, setError] = useState();
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
      await sendVerificationEmail({ email: lastNotVerifiedMail });
      router.push(`/feed`);
    } catch (error: any) {
      setError(error.response.status);
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

  return {
    formik,
    t,
    fileRef,
    changeHandler,
    editPassword,
    setEditPassword,
    userCtx,
    error,
  };
};
