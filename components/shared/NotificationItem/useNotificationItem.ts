import { useSession } from 'next-auth/react';
import { Router, useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { markAsRead } from 'services';
import { AuthContext, QuoteContext } from 'store';
import openSocket from 'socket.io-client';

export const useNotificationItem = (props: { notificationData }) => {
  const { notificationData } = props;
  const liked = notificationData.type === 'like';
  const isRead = notificationData.isRead === true;
  const quoteCtx = useContext(QuoteContext);
  const router = useRouter();
  const { data: session } = useSession();
  const ctx = useContext(AuthContext);
  const myLoader = () => {
    return `${process.env.NEXT_PUBLIC_API_URL}/${notificationData.senderId.profileImage}`;
  };

  const notificationRedirectHandler = async () => {
    let token = session ? session.accessToken : ctx.token;
    try {
      quoteCtx.notificationStateHandler(false);
      await markAsRead(notificationData._id, token as string);
      router.replace(`/feed/quotes/${notificationData.quoteId}`);
    } catch (err: any) {}
  };

  return { liked, myLoader, isRead, notificationRedirectHandler };
};
