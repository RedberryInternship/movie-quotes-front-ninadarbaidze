import { ProfileInput } from 'components';
import { EmailItemTypes } from './types';
import { useEmailItem } from './useEmailItem';

const EmailItem: React.FC<EmailItemTypes> = (props) => {
  const { email, primary, verified, onDeleteMail, onMakePrimary } = props;
  const {
    t,
    primaryClass,
    verifiedInfoBar,
    setVerifiedInfoBar,
    defaultClass,
    verifiedClass,
  } = useEmailItem();

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
          {primary && (
            <p className='text-gray10 text-sm  cursor-pointer'>Primary</p>
          )}
          {!primary && !verified && (
            <p className='text-gray10 text-sm  cursor-pointer'>Not verified</p>
          )}
          {!primary && verified && (
            <p
              className='text-gray10 text-sm  cursor-pointer'
              onClick={() => onMakePrimary(email)}
            >
              Make this primary
            </p>
          )}

          {!primary ? (
            <div className='w-[1px] h-3 rounded-full bg-gray20' />
          ) : (
            ''
          )}

          <p
            className='text-gray10 text-sm cursor-pointer'
            onClick={() => onDeleteMail(email)}
          >
            {!primary ? 'Remove' : ''}
          </p>
        </div>
      </li>
    </>
  );
};

export default EmailItem;
