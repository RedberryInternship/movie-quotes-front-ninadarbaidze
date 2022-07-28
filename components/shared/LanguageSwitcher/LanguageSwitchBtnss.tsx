import React, { useEffect, useState } from 'react';
import i18next from 'i18next';
import { useRouter } from 'next/router';
import { Listbox } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/solid';

const LanguageSwitchBtn = () => {
  const router = useRouter();

  const language = [
    { id: 1, name: 'Eng', value: 'en' },
    { id: 2, name: 'ქარ', value: 'ge' },
  ];

  function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ');
  }

  const [selected, setSelected] = useState(language[0]);
  const currentLanguage = router.locale;
  console.log(currentLanguage);

  useEffect(() => {
    const persistLanguage = () => {
      currentLanguage === 'ge' && setSelected(language[1]);
    };
    persistLanguage();
  }, [currentLanguage]);

  useEffect(() => {
    const LanguageSwitchHandler = () => {
      i18next.changeLanguage(selected.value);
    };
    LanguageSwitchHandler();
  }, [selected]);
  return (
    <>
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <div className='mt-1 relative'>
              <Listbox.Button
                id='langButton'
                className={` bg-white relative w-36 border border-dark20 rounded-2xl shadow-sm pl-3 pr-10 py-[6px] text-left cursor-default sm:text-sm`}
              >
                <span className='block truncate'>{selected.name}</span>
                <span className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                  <ChevronDownIcon
                    className='h-5 w-5 text-gray-400'
                    aria-hidden='true'
                  />
                </span>
              </Listbox.Button>

              <Listbox.Options className='absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-xl py-1 text-base ring-1 ring-dark ring-black ring-opacity-5 overflow-auto sm:text-sm'>
                {language.map((lang) => (
                  <Listbox.Option
                    key={lang.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-blue' : 'text-dark100',
                        'cursor-default select-none relative py-2 pl-3 pr-9'
                      )
                    }
                    value={lang}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? 'font-semibold' : 'font-normal',
                            'block truncate'
                          )}
                        >
                          {lang.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className='h-5 w-5' aria-hidden='true' />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </div>
          </>
        )}
      </Listbox>
    </>
  );
};

export default LanguageSwitchBtn;
