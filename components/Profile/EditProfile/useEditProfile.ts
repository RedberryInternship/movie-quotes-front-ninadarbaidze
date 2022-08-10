import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSession } from 'next-auth/react';
import { UserContext } from 'store';

export const useEditProfile = () => {
  const { t } = useTranslation();
  const [updatePassword, setUpdatePassword] = useState(false);
  const [imagePreview, setImagePreview] = useState('');
  const { data: session } = useSession();
  const userCtx = useContext(UserContext);

  const imageChangeHandler = (imageUrl: string) => {
    setImagePreview(imageUrl);
  };

  const myLoader = () => {
    const defaultProfileImg = `/assets/images/profile.png`;
    if (session?.user && !userCtx.userState.profileImage) {
      return session!.user.image as any;
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
  };
};
