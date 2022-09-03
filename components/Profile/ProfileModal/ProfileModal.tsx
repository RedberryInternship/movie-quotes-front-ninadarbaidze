import { FeedModal, UserInfo } from 'components/shared';
import React from 'react';
import { ProfileModalTypes } from './types';

const ProfileModal: React.FC<ProfileModalTypes> = (props) => {
  const { children, title } = props;
  return (
    <>
      <FeedModal className='w-full md:w-[45%]'>
        <div className='flex h-14 mb-2 border-b-[1px] border-gray15 border-opacity-20'>
          <h1 className='text-md text-left text-white font-helvetica_ge font-thin'>
            {title}
          </h1>
        </div>

        <div className='px-[4%]'>{children}</div>
      </FeedModal>
    </>
  );
};

export default ProfileModal;
