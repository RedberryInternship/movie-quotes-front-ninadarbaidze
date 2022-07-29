import React from 'react';
import { ButtonTypes } from './types';

const Button: React.FC<ButtonTypes> = (props) => {
  const { text, className } = props;

  return (
    <>
      <button
        className={`${className} text-white transition duration-300 text-base rounded-[4px] px-6 py-1`}
        onClick={props.onClick}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
