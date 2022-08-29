import React from 'react';
import { NotificationItem, Polygon } from 'components';
import { useNotificationModal } from './useNotificationModal';

const NotificationModal = () => {
  const { notifications } = useNotificationModal();
  console.log(notifications);
  return (
    <>
      <Polygon />

      <div className='flex flex-col gap-2 absolute right-32 top-10 w-[75vh] h-[55vh] p-4 bg-black rounded-xl z-50 '>
        <div className='flex justify-between text-white'>
          <h2 className='font-helvetica_ge font-thin text-xl'>Notifications</h2>
          <p className='underline text-sm cursor-pointer'>Mark as all read</p>
        </div>
        <ul className='flex flex-col gap-2 overflow-scroll'>
          {notifications.map((notification) => (
            <li key={notification._id}>
              <NotificationItem notificationData={notification} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NotificationModal;
