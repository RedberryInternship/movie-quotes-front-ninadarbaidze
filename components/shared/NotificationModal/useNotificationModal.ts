import { useSession } from 'next-auth/react';
import { useTranslation } from 'next-i18next';
import { useContext } from 'react';
import { deleteAllNotifications, markAllAsRead } from 'services';
import { AuthContext } from 'store';

export const useNotificationModal = () => {
  const { data: session } = useSession();
  const { t } = useTranslation();
  const ctx = useContext(AuthContext);
  let token = session ? session.accessToken : ctx.token;

  const deleteNotifications = async () => {
    await deleteAllNotifications(token as string);
  };

  const markAllRead = async () => {
    await markAllAsRead(token as string);
  };

  return { t, deleteNotifications, markAllRead };
};
