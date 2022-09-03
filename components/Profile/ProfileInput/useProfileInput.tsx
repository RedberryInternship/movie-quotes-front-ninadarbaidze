import { useState } from 'react';

const useProfileInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  const showHidePassHandler = () => {
    setShowPassword((prevState) => !prevState);
  };
  return { showPassword, showHidePassHandler };
};

export default useProfileInput;
