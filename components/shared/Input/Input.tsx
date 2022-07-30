import React from 'react';
import { InputTypes } from './types';
import { HidePassword, ShowPassword } from 'public/assets/svgs';
import useInput from './useInput';

const Input: React.FC<InputTypes> = (props) => {
  const { showPassword, showHidePassHandler } = useInput();

  const {
    name,
    label,
    className,
    type,
    id,
    placeholder,
    onChange,
    value,
    showHidePassword,
    errorMessage,
  } = props;

  const passwordField = type === 'password';
  const inputType = passwordField
    ? !showPassword
      ? 'password'
      : 'text'
    : type;

  return (
    <div className='h-[6rem]'>
      <div className='flex gap-2 mb-2 mt-4'>
        <label htmlFor='username' className='text-white'>
          {label}
        </label>
        <span className='text-red'>*</span>
      </div>
      <div className='flex items-center relative'>
        <input
          id={id}
          name={name}
          type={inputType}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          className={`${className} py-2 text-black placeholder:text-gray20 pl-3 w-[100%] bg-gray10 rounded-[4px]`}
        />
        {showHidePassword ? (
          showPassword ? (
            <ShowPassword
              onClick={showHidePassHandler}
              className={'absolute ml-[90%] cursor-pointer'}
            />
          ) : (
            <HidePassword
              onClick={showHidePassHandler}
              className={'absolute ml-[90%] cursor-pointer'}
            />
          )
        ) : (
          ''
        )}
      </div>
      <p className='text-red text-xs mt-1'>{errorMessage}</p>
    </div>
  );
};

export default Input;
