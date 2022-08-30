import { useSession } from 'next-auth/react';
import { useContext } from 'react';
import { deleteAllNotifications } from 'services';
import { AuthContext } from 'store';

export const useNotificationModal = () => {
  const { data: session } = useSession();
  const ctx = useContext(AuthContext);
  let token = session ? session.accessToken : ctx.token;

  const deleteNotifications = async () => {
    await deleteAllNotifications(token as string);
  };
  return { deleteNotifications };
};
