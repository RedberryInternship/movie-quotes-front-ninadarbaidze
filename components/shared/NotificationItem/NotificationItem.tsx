import React from 'react';
import Image from 'next/image';
import { Liked } from 'components/icons';

const NotificationItem = () => {
  return (
    <div>
      <div className='flex items-center justify-between p-2 border-[1px] border-opacity-50 border-gray20 rounded w-full h-20'>
        <div className='flex items-center gap-2'>
          <div
            className={`w-12 h-12 rounded-full overflow-clip border-2 border-mainDark2`}
          >
            <div className='object-cover'>
              <Image
                // loader={myLoader}
                src={'/assets/images/profile.png'}
                alt='profile-icon'
                width={50}
                height={50}
              />
            </div>
          </div>
          <div className='text-white text-base'>
            <h3>saxeli goes here</h3>
            <div className='flex gap-2 items-center'>
              <Liked />
              <p className='text-sm text-gray10'>Reacted to your quote</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-end'>
          <p className='text-darkWhite text-sm'>5 min ago</p>
          <p className='text-green text-sm'>new</p>
        </div>
      </div>
    </div>
  );
};

export default NotificationItem;
