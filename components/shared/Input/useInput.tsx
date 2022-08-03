import { useState } from 'react';

const useInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  const showHidePassHandler = () => {
    setShowPassword((prevState) => !prevState);
  };
  return { showPassword, showHidePassHandler };
};

export default useInput;
