import { ArrowDown, NotVerified } from 'components';
import React from 'react';
import { useVerifiedInfoBar } from './useVerifiedInfoBar';

const VerifiedInfoBar = () => {
  const { t } = useVerifiedInfoBar();
  return (
    <div className='flex flex-col justify-center items-center px-2 h-12 bg-white rounded absolute top-0 right-0'>
      <div className='relative w-full'>
        <div className='absolute top-7 left-[50%] translate-x-[-50%]'>
          <ArrowDown />
        </div>
        <div className='flex  gap-1'>
          <NotVerified className='#485563' />
          <p className='text-gray30 text-xs'>{t('profile:pleaseVerify')}</p>
        </div>
      </div>
    </div>
  );
};

export default VerifiedInfoBar;
