import { useState } from 'react';

const useProfileInput = (props: { type: string; id: string }) => {
  const { type, id } = props;
  const [showPassword, setShowPassword] = useState(false);

  const showHidePassHandler = () => {
    setShowPassword((prevState) => !prevState);
  };

  const passwordField = type === 'password';
  const inputType = passwordField
    ? !showPassword
      ? 'password'
      : 'text'
    : type;

  const deleteInputHandler = () => {
    (document.getElementById(`${id}`) as HTMLInputElement)!.value = '';
  };
  return {
    showPassword,
    showHidePassHandler,
    inputType,
    deleteInputHandler,
    passwordField,
  };
};

export default useProfileInput;
