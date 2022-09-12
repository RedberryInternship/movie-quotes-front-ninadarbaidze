import { useTranslation } from 'react-i18next';
import { useSession } from 'next-auth/react';
import { useContext } from 'react';
import { UserContext } from 'store';

export const useUserInfo = () => {
  const { t } = useTranslation();
  const { data: session } = useSession();
  const userCtx = useContext(UserContext);

  const myLoader = () => {
    const defaultProfileImg = `/assets/images/profile.png`;
    if (
      userCtx.userState.profileImage &&
      userCtx.userState.profileImage.startsWith('https')
    ) {
      return userCtx.userState.profileImage;
    } else if (userCtx.userState.profileImage) {
      return `${process.env.NEXT_PUBLIC_API_URL}/${userCtx.userState.profileImage}`;
    } else {
      return defaultProfileImg;
    }
  };

  return { t, session, myLoader, userCtx };
};
