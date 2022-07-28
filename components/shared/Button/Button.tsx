import React from 'react';
import { ButtonTypes } from './types';

const Button: React.FC<ButtonTypes> = (props) => {
  const { text, className } = props;
  return (
    <>
      <button
        className={`${className} text-white text-base rounded-[4px] px-6 py-1`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
