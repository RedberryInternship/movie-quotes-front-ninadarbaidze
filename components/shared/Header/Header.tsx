import React from 'react';
import { Button } from 'components';
import { LanguageSwitchBtn } from 'components';

const Header = () => {
  return (
    <>
      <nav className='flex justify-between px-[5%] py-[2%] bg-mainDark'>
        <h1 className='font-helvetica_en text-beidge'>MOVIE QUOTES</h1>
        <div className='flex gap-4'>
          <LanguageSwitchBtn />
          <Button text='Sign Up' className='bg-red hover:bg-redHover' />
          <Button text='Log in' className='bg-none border' />
        </div>
      </nav>
    </>
  );
};

export default Header;
