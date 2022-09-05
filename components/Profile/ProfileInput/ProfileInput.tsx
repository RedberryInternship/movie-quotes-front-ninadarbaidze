import { InputTypes } from './types';
import {
  HidePassword,
  ShowPassword,
  DeleteIcon,
  Primary,
  NotVerified,
  VerifiedInfoBar,
} from 'components';
import useProfileInput from './useProfileInput';

const ProfileInput: React.FC<InputTypes> = (props) => {
  let {
    name,
    label,
    className,
    type,
    id,
    placeholder,
    onChange,
    value,
    onBlur,
    primary,
    verified,
    deleteInput,
    disabled,
    onClick,
    disablePassword,
    verifiedInfoBar,
    setVerifiedInfoBar,
    error,
    errorMsg,
    errorMessage,
    isTouched,
  } = props;

  const {
    showPassword,
    showHidePassHandler,
    inputType,
    deleteInputHandler,
    passwordField,
  } = useProfileInput({
    type,
    id,
  });

  return (
    <div className='h-[6rem] relative'>
      <div className='flex gap-2 mb-2 mt-8'>
        {verifiedInfoBar && <VerifiedInfoBar />}
        <label htmlFor='username' className='text-white'>
          {label}
        </label>
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
          disabled={disabled ? true : false}
          onClick={onClick}
          className={`${className} py-2  placeholder:text-gray20  pl-3 w-[100%] rounded-[4px] px-12 truncate`}
        />
        {passwordField && !disablePassword ? (
          showPassword ? (
            <div
              onClick={showHidePassHandler}
              className={'absolute ml-[90%] cursor-pointer'}
            >
              <ShowPassword />
            </div>
          ) : (
            <div
              onClick={showHidePassHandler}
              className={'absolute ml-[90%] cursor-pointer'}
            >
              <HidePassword />
            </div>
          )
        ) : (
          ''
        )}
        {deleteInput && (
          <div
            onClick={deleteInputHandler}
            className='absolute ml-[92%] cursor-pointer'
          >
            <DeleteIcon />
          </div>
        )}
        {primary && (
          <div className='absolute ml-[92%]'>
            <Primary />
          </div>
        )}
        {verified === false && (
          <div
            onMouseEnter={() => setVerifiedInfoBar!(true)}
            onMouseLeave={() => setVerifiedInfoBar!(false)}
            className='absolute ml-[92%] cursor-pointer'
          >
            <NotVerified className='#EC9524' />
          </div>
        )}
      </div>
      {error?.includes('User') ? (
        <p className='text-red text-xs mt-2'>{errorMsg}</p>
      ) : (
        ''
      )}
      {isTouched && errorMessage && (
        <p className='text-red text-xs mt-2'>{errorMessage}</p>
      )}
    </div>
  );
};

export default ProfileInput;
