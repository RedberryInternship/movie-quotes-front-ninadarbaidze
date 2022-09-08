import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthContext, QuoteContext } from 'store';
import { signOut } from 'next-auth/react';
import { getNotifications } from 'services';
import openSocket from 'socket.io-client';
import { Notifications } from 'types';

const useMainHeader = (props: { setMobileMenu: (arg0: boolean) => void }) => {
  const { setMobileMenu } = props;
  const ctx = useContext(AuthContext);
  const quoteCtx = useContext(QuoteContext);
  const { t } = useTranslation();
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
          (notification: Notifications) => notification.receiverId === userId
        );
        setNotifications(receiverNotifications);

        const totalNewNotifications = receiverNotifications.filter(
          (notification: Notifications) => notification.isRead === false
        );
        setTotalNotifications(totalNewNotifications.length);
      } catch (err: any) {}
    };
    getData();
  }, [ctx.token, ctx.userId, session, token, userId]);

  useEffect(() => {
    const socket = openSocket(`${process.env.NEXT_PUBLIC_API_URL}`);
    socket.on('quotes', (data) => {
      if (
        data.action === 'addComment' ||
        data.action === 'like' ||
        data.action === 'isRead' ||
        data.action === 'deleteAll'
      ) {
        const receiverNotifications = data.notifications.filter(
          (notification: Notifications) => notification.receiverId === userId
        );
        setNotifications(receiverNotifications);

        const totalNewNotifications = receiverNotifications.filter(
          (notification: Notifications) => notification.isRead === false
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

  const readNotificationsHandler = () => {
    const readNotifications = notifications.map(
      (notification: Notifications) => notification.isRead === false
    );
    return (
      (readNotifications.length > 0 || notifications[0] === false) &&
      readNotifications[0]
    );
  };

  const handleMobileMenu = () => {
    setMobileMenu(true);
  };

  const variants = {
    initial: {
      opacity: 0,
    },
    visible: {
      y: [-50, 0, -500],
      opacity: [1, 0],
      transition: {
        type: 'ease-in',
        delay: 2,
        duration: 2,
      },
    },
  };

  return {
    t,
    logoutHandler,
    quoteCtx,
    notifications,
    totalNotifications,
    readNotificationsHandler,
    variants,
    handleMobileMenu,
    router,
  };
};

export default useMainHeader;
