import { useTranslation } from 'next-i18next';
import { useState } from 'react';

export const useEmailItem = () => {
  const [verifiedInfoBar, setVerifiedInfoBar] = useState(false);

  const { t } = useTranslation();

  const primaryClass =
    'px-48 border-[1px] border-green bg-green bg-opacity-20 text-white';
  const defaultClass = 'px-48 bg-gray10 text-black';
  const verifiedClass =
    'px-48 border-[1px] border-yellow bg-yellow bg-opacity-20 text-white';

  return {
    t,
    primaryClass,
    verifiedInfoBar,
    setVerifiedInfoBar,
    defaultClass,
    verifiedClass,
  };
};
