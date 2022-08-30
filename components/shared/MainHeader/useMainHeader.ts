import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthContext, QuoteContext } from 'store';
import { signOut } from 'next-auth/react';
import { getNotifications } from 'services';
import openSocket from 'socket.io-client';

const useMainHeader = () => {
  const { t } = useTranslation();
  const ctx = useContext(AuthContext);
  const quoteCtx = useContext(QuoteContext);
  const { data: session } = useSession();
  const router = useRouter();
  const [notifications, setNotifications] = useState([]);
  const [totalNotifications, setTotalNotifications] = useState(0);

  let token = session ? session.accessToken : ctx.token;
  let userId: string | Blob | unknown = session ? session.userId : ctx.userId;
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getNotifications(token as string);
        const receiverNotifications = response.data.filter(
          (notification) => notification.receiverId === userId
        );
        setNotifications(receiverNotifications);

        const totalNewNotifications = receiverNotifications.filter(
          (notification) => notification.isRead === false
        );
        setTotalNotifications(totalNewNotifications.length);
      } catch (err: any) {}
    };
    getData();
  }, [ctx.token, ctx.userId, session]);

  useEffect(() => {
    const socket = openSocket(`${process.env.NEXT_PUBLIC_API_URL}`);
    socket.on('quotes', (data) => {
      if (
        data.action === 'addComment' ||
        data.action === 'like' ||
        data.action === 'isRead'
      ) {
        const receiverNotifications = data.notifications.filter(
          (notification) => notification.receiverId === userId
        );
        setNotifications(receiverNotifications);

        const totalNewNotifications = receiverNotifications.filter(
          (notification) => notification.isRead === false
        );
        setTotalNotifications(totalNewNotifications.length);
      }
    });
  }, [userId]);

  const logoutHandler = () => {
    if (session) {
      signOut();
    } else {
      ctx.logoutHandler();
    }
    router.push('/');
  };

  return { t, logoutHandler, quoteCtx, notifications, totalNotifications };
};

export default useMainHeader;
