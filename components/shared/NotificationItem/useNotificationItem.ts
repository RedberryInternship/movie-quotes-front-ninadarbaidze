import { useSession } from 'next-auth/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { markAsRead } from 'services';
import { AuthContext, QuoteContext } from 'store';
import { Notifications } from 'types';

export const useNotificationItem = (props: {
  notificationData: Notifications;
}) => {
  const { notificationData } = props;
  const quoteCtx = useContext(QuoteContext);
  const ctx = useContext(AuthContext);
  const { t } = useTranslation();
  const router = useRouter();
  const { data: session } = useSession();

  const liked = notificationData.type === 'like';
  const isRead = notificationData.isRead === true;

  const myLoader = () => {
    const defaultProfileImg = `/assets/images/profile.png`;

    if (
      notificationData.senderId.profileImage &&
      notificationData.senderId.profileImage.startsWith('https')
    ) {
      return notificationData.senderId.profileImage;
    } else if (notificationData.senderId.profileImage) {
      return `${process.env.NEXT_PUBLIC_API_URL}/${notificationData.senderId.profileImage}`;
    } else {
      return defaultProfileImg;
    }
  };

  const notificationRedirectHandler = async () => {
    let token = session ? session.accessToken : ctx.token;
    try {
      quoteCtx.notificationStateHandler(false);
      await markAsRead(notificationData._id, token as string);
      router.replace(`/feed/quotes/${notificationData.quoteId}`);
    } catch (err: any) {}
  };

  return { t, liked, myLoader, isRead, notificationRedirectHandler };
};
