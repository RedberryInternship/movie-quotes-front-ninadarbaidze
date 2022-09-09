import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSession } from 'next-auth/react';
import { AuthContext, UserContext } from 'store';
import { getUserInfo } from 'services';
import { EmailListObjectTypes } from 'types';
import { useRouter } from 'next/router';

export const useEditProfile = () => {
  const { t } = useTranslation();
  const [updatePassword, setUpdatePassword] = useState(false);
  const [imagePreview, setImagePreview] = useState('');
  const [emailList, setEmailList] = useState<EmailListObjectTypes[]>([]);
  const [customLoader, setCustomLoader] = useState(false);
  const { data: session } = useSession();
  const userCtx = useContext(UserContext);
  const ctx = useContext(AuthContext);
  const router = useRouter();

  const imageChangeHandler = (imageUrl: string) => {
    setImagePreview(imageUrl);
  };
  const mobileProfileStateHandler = () => {
    userCtx.emailSection && userCtx.setEmailSection(false);
    userCtx.passwordSection && userCtx.setPasswordSection(false);
    !userCtx.emailSection && !userCtx.passwordSection && router.push('/feed');
    userCtx.setEditPassword(false);
  };

  useEffect(() => {
    setCustomLoader(true);
    const getData = async () => {
      try {
        const response = await getUserInfo(ctx.userId, ctx.token);
        setEmailList(response.data.user.emails);
      } catch (err: any) {}
      setCustomLoader(false);
    };
    getData();
  }, [ctx.token, ctx.userId]);

  const myLoader = () => {
    const defaultProfileImg = `/assets/images/profile.png`;
    if (session?.user && !userCtx.userState.profileImage) {
      return session!.user.image as string;
    } else if (userCtx.userState.profileImage) {
      return `${process.env.NEXT_PUBLIC_API_URL}/${userCtx.userState.profileImage}`;
    } else {
      return defaultProfileImg;
    }
  };

  return {
    t,
    updatePassword,
    setUpdatePassword,
    imagePreview,
    imageChangeHandler,
    session,
    myLoader,
    userCtx,
    emailList,
    setEmailList,
    mobileProfileStateHandler,
    customLoader,
  };
};
