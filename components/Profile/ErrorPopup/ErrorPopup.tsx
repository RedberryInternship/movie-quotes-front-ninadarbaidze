import { CloseBtn } from 'components';
import React from 'react';
import Image from 'next/image';
import { useErrorPopup } from './useErrorPopup';

const ErrorPopup = () => {
  const { userCtx } = useErrorPopup();

  return (
    <>
      <div className='flex flex-col px-2 pt-2 absolute w-72 h-24 rounded bg-[#FEE2E2] top-0 right-0 z-50'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <div>
              <Image
                src={'/assets/images/error.png'}
                alt='popup-icon'
                width={25}
                height={25}
              />
            </div>
            <h3 className='text-[#B91C1C] text-base'>Error occurred!</h3>
          </div>
          <button onClick={() => userCtx.setErrorPopup('')}>
            <CloseBtn className='#485563' />
          </button>
        </div>
        <p className='text-mainDark text-sm ml-3 mt-3'>{userCtx.errorPopup}</p>
      </div>
    </>
  );
};

export default ErrorPopup;
