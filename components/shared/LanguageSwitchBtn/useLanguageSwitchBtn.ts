import { useRouter } from 'next/router';
import { useState } from 'react';

export const useLanguageSwitchBtn = () => {
  const { locale, asPath } = useRouter();
  const [languageModal, setLanguageModal] = useState<boolean>(false);
  const [currentLanguage, setCurrentLanguage] = useState(locale);

  const openLanChangeHandler = () => {
    setLanguageModal((prevState) => !prevState);
  };

  return {
    locale,
    languageModal,
    currentLanguage,
    openLanChangeHandler,
    setCurrentLanguage,
    asPath,
  };
};
