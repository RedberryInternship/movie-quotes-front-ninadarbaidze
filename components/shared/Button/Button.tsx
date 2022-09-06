import React from 'react';
import { ButtonTypes } from './types';

const Button: React.FC<ButtonTypes> = (props) => {
  const { text, className, type } = props;

  return (
    <>
      <button
        type={type}
        className={`${className}  text-white transition duration-300 font-helvetica_ge font-thin text-base rounded-[4px] px-6 py-1`}
        onClick={props.onClick}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
