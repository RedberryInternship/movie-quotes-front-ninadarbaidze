import React from 'react';
import { GoogleIcon } from 'components';
import { submitHandler } from './helpers';
import { GoogleBtnTypes } from './types';

const GoogleBtn: React.FC<GoogleBtnTypes> = (props) => {
  const { text } = props;
  return (
    <>
      <div>
        <button
          onClick={submitHandler}
          className='relative w-[100%] mt-6 h-12 text-base text-white border rounded-[4px]'
        >
          {text}
          <GoogleIcon className='absolute top-[30%] left-[22%]' />
        </button>
      </div>
    </>
  );
};

export default GoogleBtn;
