import { Button, LanguageSwitchBtn, useHeader } from 'components';

const Header = () => {
  const { t, changeRegistrationModalState } = useHeader();

  return (
    <>
      <nav className='flex justify-between items-center px-[5%] py-[5%] lg:py-[2%] bg-mainDark'>
        <h1 className='font-helvetica_en text-beidge text-xs lg:text-xl'>
          MOVIE QUOTES
        </h1>
        <div className='flex items-center gap-4'>
          <LanguageSwitchBtn />
          <Button
            text={t('home:signup')}
            className='xs:hidden sm:block bg-red hover:bg-redHover'
            onClick={() => changeRegistrationModalState(true)}
          />
          <Button text={t('home:login')} className='bg-none border' />
        </div>
      </nav>
    </>
  );
};

export default Header;
