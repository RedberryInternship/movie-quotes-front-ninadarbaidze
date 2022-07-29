import React from 'react';
import { InputTypes } from './types';

const Input: React.FC<InputTypes> = (props) => {
  const { name, label, className, type, id, placeholder, onChange, value } =
    props;
  return (
    <>
      <div className='flex gap-2 mb-2 mt-4'>
        <label htmlFor='username' className='text-white'>
          {label}
        </label>
        <span className='text-red'>*</span>
      </div>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={`${className} py-2 text-black placeholder:text-gray20 pl-3 w-[100%] bg-gray10 rounded-[4px]`}
      />
    </>
  );
};

export default Input;
