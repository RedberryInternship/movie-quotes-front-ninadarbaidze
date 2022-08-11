import { InputTypes } from './types';
import { HidePassword, ShowPassword, DeleteIcon } from 'components';
import useInput from './useInput';

const Input: React.FC<InputTypes> = (props) => {
  const { showPassword, showHidePassHandler } = useInput();

  let {
    name,
    label,
    className,
    type,
    id,
    placeholder,
    onChange,
    value,
    errorMessage,
    onBlur,
    isTouched,
    error,
    errorMsg,
    deleteInput,
  } = props;

  const passwordField = type === 'password';
  const inputType = passwordField
    ? !showPassword
      ? 'password'
      : 'text'
    : type;

  const deleteInputHandler = () => {
    document.getElementById(`${id}`)!.value = '';
  };

  return (
    <div className='h-[6rem]'>
      <div className='flex gap-2 mb-2 mt-8'>
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
          onBlur={onBlur}
          value={value}
          className={`${className} py-2 text-black placeholder:text-gray20  pl-3 w-[100%] bg-gray10 rounded-[4px] px-12 truncate`}
        />
        {passwordField ? (
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
        {deleteInput && <DeleteIcon onClick={deleteInputHandler} />}
      </div>

      <div className='flex gap-3'>
        {isTouched && errorMessage ? (
          <p className='text-red text-xs mt-1'>{errorMessage}</p>
        ) : (
          ''
        )}
        {error && errorMessage ? (
          <p className='text-red text-xs mt-1'> | </p>
        ) : (
          ''
        )}
        {error ? <p className='text-red text-xs mt-1'>{errorMsg}</p> : ''}
      </div>
    </div>
  );
};

export default Input;
