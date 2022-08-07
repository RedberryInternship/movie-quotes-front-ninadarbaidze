import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/solid';
import { LanguageSwitchBtnTypes } from './types';

const LanguageSwitchBtn: React.FC<LanguageSwitchBtnTypes> = (props) => {
  const { page, className } = props;
  const { locale } = useRouter();
  const [languageModal, setLanguageModal] = useState<boolean>(false);
  const [currentLanguage, setCurrentLanguage] = useState(locale);

  const openLanChangeHandler = () => {
    setLanguageModal((prevState) => !prevState);
  };

  return (
    <>
      <nav className={`${className} flex flex-col items-center relative mr-8`}>
        <div
          className='flex items-center gap-2 cursor-pointer '
          onClick={openLanChangeHandler}
        >
          <p className='text-white font-helvetica_ge font-thin'>
            {currentLanguage === 'en' ? 'Eng' : 'ქარ'}
          </p>
          <ChevronDownIcon className='text-white w-6' />
        </div>
        {languageModal && (
          <div className='flex flex-col justify-start rounded-[4px]  px-4 py-1  border border-white absolute top-8'>
            <ul className='flex flex-col gap-2 mr-6'>
              <li>
                <Link href={`/${page ? page : ''}`} locale={'en'}>
                  <div
                    className='flex items-center gap-2 cursor-pointer '
                    onClick={() => setCurrentLanguage('en')}
                  >
                    <a className='text-white font-helvetica_ge font-thin'>
                      Eng
                    </a>
                    {currentLanguage === 'en' && (
                      <CheckIcon className='text-white w-4 mr-[-3rem]' />
                    )}
                  </div>
                </Link>
              </li>
              <li>
                <Link href={`/${page ? page : ''}`} locale={'ge'}>
                  <div
                    className='flex items-center gap-2 cursor-pointer '
                    onClick={() => setCurrentLanguage('ge')}
                  >
                    <a className='text-white font-thin'>ქარ</a>
                    {currentLanguage === 'ge' && (
                      <CheckIcon className='text-white w-4 mr-[-3rem]' />
                    )}
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default LanguageSwitchBtn;
