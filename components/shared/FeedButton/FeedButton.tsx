import React from 'react';
import { ButtonTypes } from './types';
import { AddBtn } from 'components';

const FeedButton: React.FC<ButtonTypes> = (props) => {
  const { text, className, onClick } = props;
  return (
    <>
      <button
        className={`${className} flex items-center gap-2 bg-red hover:bg-redHover text-white transition duration-300 font-helvetica_ge font-thin text-sm sm:text-base rounded-[4px] px-3 py-1`}
        onClick={onClick}
      >
        <AddBtn />
        {text}
      </button>
    </>
  );
};

export default FeedButton;
