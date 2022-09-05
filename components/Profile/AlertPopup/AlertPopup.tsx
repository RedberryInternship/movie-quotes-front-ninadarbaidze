import { Check, CloseBtn } from 'components';
import React from 'react';
import { useAlertPopup } from './useAlertPopup';

const AlertPopup = () => {
  const { userCtx } = useAlertPopup();
  return (
    <>
      <div className='flex flex-col px-2 pt-2 absolute w-72 h-24 rounded bg-greenPastel top-0 right-0 z-50'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <Check />
            <h3 className='text-green20 text-base'>Check it out!</h3>
          </div>
          <button onClick={() => userCtx.setSuccessPopup('')}>
            <CloseBtn className='#485563' />
          </button>
        </div>
        <p className='text-mainDark text-sm ml-3 mt-3'>
          {userCtx.successPopup}
        </p>
      </div>
    </>
  );
};

export default AlertPopup;
