import {
  LanguageSwitchBtn,
  Button,
  NotificationBadge,
  HamMenu,
} from 'components';
import useMainHeader from './useMainHeader';
import { MobileMenuTypes } from 'types';
import { MobileMenu } from 'components';
import { NotificationModal } from '../NotificationModal';

const MainHeader: React.FC<MobileMenuTypes> = (props) => {
  const { mobileMenu, setMobileMenu } = props;
  const { t, logoutHandler, quoteCtx } = useMainHeader();

  const handleMobileMenu = () => {
    setMobileMenu(true);
  };

  return (
    <>
      {mobileMenu && <MobileMenu />}

      <nav className='flex justify-between absolute w-full items-center px-[5%] py-[5%] lg:py-[2%] bg-gray30 z-20'>
        <h1 className='xs:hidden lg:block font-helvetica_en hidden text-beidge text-xs lg:text-xl'>
          MOVIE QUOTES
        </h1>
        <button onClick={handleMobileMenu}>
          <HamMenu className='lg:hidden' />
        </button>
        <div className='flex gap-4 relative'>
          <NotificationBadge />

          {quoteCtx.notificationState && <NotificationModal />}

          <LanguageSwitchBtn className='mr-0' />
          <Button
            text={t('profile:logout')}
            className='bg-none border xs:hidden sm:block'
            onClick={() => logoutHandler()}
          />
        </div>
      </nav>
      {quoteCtx.notificationState && (
        <div
          className='w-full h-full top-0 left-0 fixed bg-black bg-opacity-20 backdrop-filter backdrop-blur-sm z-10'
          onClick={() => quoteCtx.notificationStateHandler()}
        ></div>
      )}
    </>
  );
};

export default MainHeader;
