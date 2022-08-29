import React from 'react';
import { NotificationItem } from 'components';

const NotificationModal = () => {
  return (
    <div className='flex flex-col gap-2 absolute right-32 top-8 w-[75vh] h-[55vh] p-4 bg-black rounded-xl z-50 '>
      <div className='flex justify-between text-white'>
        <h2 className='font-helvetica_ge font-thin text-xl'>Notifications</h2>
        <p className='underline text-sm cursor-pointer'>Mark as all read</p>
      </div>
      <div className='flex flex-col gap-2 overflow-scroll'>
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
        <NotificationItem />
      </div>
    </div>
  );
};

export default NotificationModal;
