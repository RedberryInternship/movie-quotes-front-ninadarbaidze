import { useTranslation } from 'react-i18next';
import { useSession } from 'next-auth/react';
import { useContext } from 'react';
import { UserContext } from 'store';

export const useSideBar = () => {
  const { t } = useTranslation();
  const { data: session } = useSession();
  const userCtx = useContext(UserContext);

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

  return { t, session, myLoader, userCtx };
};
