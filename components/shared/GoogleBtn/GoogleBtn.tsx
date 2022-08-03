import React from 'react';
import { GoogleIcon } from 'public/assets/svgs';
import { signIn } from 'next-auth/react';

const GoogleBtn = () => {
  const submitHandler = () => {
    signIn('google');
  };

  return (
    <>
      <div>
        <button
          onClick={submitHandler}
          className='relative w-[100%] mt-6 h-12 text-base text-white border rounded-[4px]'
        >
          Sign up with Google
          <GoogleIcon className='absolute top-[30%] left-[22%]' />
        </button>
      </div>
    </>
  );
};

export default GoogleBtn;
