import React from 'react';
import { NotificationItem, Polygon } from 'components';
import { useNotificationModal } from './useNotificationModal';
import { NotificationTypes } from 'types';

const NotificationModal: React.FC<NotificationTypes> = (props) => {
  const { notifications } = props;
  const { t, deleteNotifications, markAllRead } = useNotificationModal();

  return (
    <>
      <Polygon />

      <div className='flex flex-col gap-2 w-full sm:w-[66vh] lg:w-[75vh] fixed sm:absolute right-0 sm:right-[-1rem] lg:right-32 top-[4rem] sm:top-10 sm:h-[55vh] p-4 bg-black rounded-xl z-50 '>
        <div className='flex justify-between text-white'>
          <h2 className='font-helvetica_ge font-thin text-xl'>
            {t('quotes:notifications')}
          </h2>
          <div className='flex gap-2'>
            <p
              className='underline text-sm cursor-pointer hover:text-red transition-all duration-500'
              onClick={() => deleteNotifications()}
            >
              {t('quotes:clear')}
            </p>
            <p
              className='underline text-sm cursor-pointer hover:text-green'
              onClick={() => markAllRead()}
            >
              {t('quotes:markAsRead')}
            </p>
          </div>
        </div>

        <ul className='flex flex-col gap-2 overflow-auto'>
          {notifications.map((notification) => (
            <li key={notification._id}>
              <NotificationItem notificationData={notification} />
            </li>
          ))}
        </ul>
        {notifications.length === 0 && (
          <p className='flex justify-center items-center text-gray30 text-lg mt-6 pb-8'>
            <b> {t('quotes:noNot')}</b>
          </p>
        )}
      </div>
    </>
  );
};

export default NotificationModal;
