import { useTranslation } from 'next-i18next';
import { useContext, useState } from 'react';
import { UserContext } from 'store';

export const useEmailItem = () => {
  const [verifiedInfoBar, setVerifiedInfoBar] = useState(false);
  const userCtx = useContext(UserContext);

  const { t } = useTranslation();

  const primaryClass =
    ' border-[1px] border-green bg-green bg-opacity-20 text-white';
  const defaultClass = ' md:bg-gray10 bg-transparent text-white md:text-black';
  const verifiedClass =
    ' md:border-[1px] md:border-yellow bg-transparent md:bg-yellow md:bg-opacity-20 text-white';

  return {
    t,
    primaryClass,
    verifiedInfoBar,
    setVerifiedInfoBar,
    defaultClass,
    verifiedClass,
    userCtx,
  };
};
