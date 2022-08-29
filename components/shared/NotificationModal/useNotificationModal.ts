import { useSession } from 'next-auth/react';
import { useContext, useEffect, useState } from 'react';
import { getNotifications } from 'services';
import { AuthContext } from 'store';

export const useNotificationModal = () => {
  const { data: session } = useSession();
  const ctx = useContext(AuthContext);
  const [notifications, setNotifications] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let token = session ? session.accessToken : ctx.token;
      let userId: string | Blob | unknown = session
        ? session.userId
        : ctx.userId;

      try {
        const response = await getNotifications(token as string);
        const receiverNotifications = response.data.filter(
          (notification) => notification.receiverId === userId
        );
        setNotifications(receiverNotifications);
      } catch (err: any) {}
    };
    getData();
  }, [ctx.token, session]);
  return { notifications };
};
