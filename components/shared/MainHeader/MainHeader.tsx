import {
  LanguageSwitchBtn,
  Button,
  NotificationBadge,
  HamMenu,
} from 'components';
import useMainHeader from './useMainHeader';

const MainHeader = () => {
  const { t } = useMainHeader();
  return (
    <>
      <nav className='xs:hidden lg:flex justify-between items-center px-[5%] py-[5%] lg:py-[2%] bg-gray30 '>
        <h1 className='font-helvetica_en hidden sm:block text-beidge text-xs lg:text-xl'>
          MOVIE QUOTES
        </h1>
        <div className='sm:flex sm:gap-4 xs:hidden'>
          <NotificationBadge />
          <LanguageSwitchBtn page={'profile'} className='xs:hidden sm:block' />
          <Button
            text={t('profile:logout')}
            className='bg-none border xs:hidden sm:block'
          />
        </div>
      </nav>
      <div className='lg:hidden flex items-center justify-between px-[5%] py-[5%] lg:py-[2%] bg-gray30 '>
        <HamMenu className='' />
        <NotificationBadge />
      </div>
    </>
  );
};

export default MainHeader;
