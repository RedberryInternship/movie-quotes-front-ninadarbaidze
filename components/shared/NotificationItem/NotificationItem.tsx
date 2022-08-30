import React from 'react';
import Image from 'next/image';
import { Liked, QuoteIcon } from 'components/icons';
import { useNotificationItem } from './useNotificationItem';
import { format } from 'timeago.js';

const NotificationItem: React.FC<any> = (props) => {
  const { notificationData, className } = props;
  const { liked, myLoader, isRead, notificationRedirectHandler } =
    useNotificationItem({ notificationData });
  return (
    <div className={`${className}`}>
      <div
        className='flex items-center justify-between p-2 border-[1px] border-opacity-50 border-gray20 rounded w-full h-20 cursor-pointer hover:border-green transition-all duration-500'
        onClick={() => notificationRedirectHandler()}
      >
        <div className='flex items-center gap-2'>
          <div
            className={`w-12 h-12 rounded-full overflow-clip border-2 ${
              isRead ? 'border-mainDark2' : 'border-green'
            }`}
          >
            <div className='object-cover'>
              <Image
                loader={myLoader}
                src={`${process.env.NEXT_PUBLIC_API_URL}/${notificationData.senderId.profileImage}`}
                alt='profile-icon'
                width={50}
                height={50}
              />
            </div>
          </div>
          <div className='text-white text-base'>
            <h3>{notificationData.senderId.username}</h3>
            <div className='flex gap-2 items-center'>
              {liked ? <Liked /> : <QuoteIcon className='w-[18px]' />}
              <p className='text-sm text-gray10'>
                {liked
                  ? 'Reacted to your quote'
                  : 'Commented to your movie quote'}
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-end'>
          <p className='text-darkWhite text-sm'>
            {format(notificationData.createdAt)}
          </p>
          {!isRead && <p className='text-green text-sm'>new</p>}
        </div>
      </div>
    </div>
  );
};

export default NotificationItem;
