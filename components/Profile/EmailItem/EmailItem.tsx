import { NotVerified, ProfileInput } from 'components';
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
    userCtx,
  } = useEmailItem();

  return (
    <>
      <li className='flex xs:flex-col md:flex-row justify-start xs:mt-[-3rem] md:mt-0 md:gap-4 w-full '>
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
          className={` ${
            primary ? primaryClass : !verified ? verifiedClass : defaultClass
          } `}
        />
        <div className='flex justify-between md:justify-start items-center gap-2 mt-8 mb-10 md:mb-0 md:mt-[4.5rem]'>
          {primary && (
            <p className='text-gray10 text-sm  cursor-pointer xs:hidden md:block'>
              {t('profile:primary')}
            </p>
          )}
          {!primary && !verified && (
            <>
              <div className='flex gap-2 items-center'>
                <div className='md:hidden'>
                  <NotVerified className='#EC9524' />
                </div>
                <p className='md:text-gray10 text-sm italic text-yellow md:not-italic cursor-pointer'>
                  {t('profile:notVerified')}
                </p>
              </div>
            </>
          )}
          {!primary && verified && (
            <p
              className='text-gray10 text-sm  cursor-pointer border-[1px] border-gray10 rounded-md px-4 py-2 md:px-0 md:py-0 md:border-none'
              onClick={() => onMakePrimary(email)}
            >
              {t('profile:makePrimary')}
            </p>
          )}

          {!primary ? (
            <div className='hidden md:block w-[1px] h-3 rounded-full bg-gray20' />
          ) : (
            ''
          )}

          <p
            className='text-gray10 text-sm cursor-pointer'
            onClick={() => onDeleteMail(email)}
          >
            {!primary ? `${t('profile:remove')}` : ''}
          </p>
        </div>
      </li>
      {userCtx.emailSection && (
        <div className='md:hidden'>
          <div className='w-full h-[1px] mt-[-1rem] bg-gray10 bg-opacity-50 md:border-0' />
          {primary && (
            <p className='text-white mt-4 text-sm'>
              {t('profile:changePrimaryH')}
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default EmailItem;
