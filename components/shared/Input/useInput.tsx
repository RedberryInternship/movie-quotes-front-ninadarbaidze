import { useTranslation } from 'next-i18next';
import { useState } from 'react';

const useInput = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();

  const showHidePassHandler = () => {
    setShowPassword((prevState) => !prevState);
  };
  return { showPassword, showHidePassHandler, t };
};

export default useInput;
