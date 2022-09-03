import React, { useState } from 'react';
import { ProfileInput } from 'components';
import { EmailItemTypes } from './types';
import { useEmailItem } from './useEmailItem';

const EmailItem: React.FC<EmailItemTypes> = (props) => {
  const { email, primary, verified } = props;
  const { t } = useEmailItem();
  const primaryClass =
    'px-48 border-[1px] border-green bg-green bg-opacity-20 text-white';
  const defaultClass = 'px-48 bg-gray10 text-black';
  const verifiedClass =
    'px-48 border-[1px] border-yellow bg-yellow bg-opacity-20 text-white';
  const [verifiedInfoBar, setVerifiedInfoBar] = useState(false);
  return (
    <>
      <li className='flex justify-start gap-4 w-full '>
        <ProfileInput
          id='email'
          name='email'
          type='email'
          label={t('home:loginInp1')}
          placeholder={t('home:emailPlaceholder')}
          value={email}
          disabled={true}
          primary={primary}
          verified={verified}
          verifiedInfoBar={verifiedInfoBar}
          setVerifiedInfoBar={setVerifiedInfoBar}
          className={`${
            primary ? primaryClass : !verified ? verifiedClass : defaultClass
          }`}
        />
        <div className='flex items-center gap-2 mt-[4.5rem]'>
          <p className='text-gray10 text-sm  cursor-pointer'>
            {primary && 'Primary'}
            {!primary && !verified && 'Not verified'}
            {!primary && verified && 'Make this primary'}
          </p>
          {!primary ? (
            <div className='w-[1px] h-3 rounded-full bg-gray20' />
          ) : (
            ''
          )}

          <p className='text-gray10 text-sm cursor-pointer'>
            {!primary ? 'Remove' : ''}
          </p>
        </div>
      </li>
    </>
  );
};

export default EmailItem;
