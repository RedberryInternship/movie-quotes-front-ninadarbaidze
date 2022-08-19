import {
  LanguageSwitchBtn,
  Button,
  NotificationBadge,
  HamMenu,
} from 'components';
import useMainHeader from './useMainHeader';
import { MobileMenuTypes } from 'types';
import { MobileMenu } from 'components';

const MainHeader: React.FC<MobileMenuTypes> = (props) => {
  const { mobileMenu, setMobileMenu } = props;
  const { t, logoutHandler } = useMainHeader();

  const handleMobileMenu = () => {
    setMobileMenu(true);
  };

  return (
    <>
      {mobileMenu && <MobileMenu />}

      <nav className='flex justify-between items-center px-[5%] py-[5%] lg:py-[2%] bg-gray30 '>
        <h1 className='xs:hidden lg:block font-helvetica_en hidden text-beidge text-xs lg:text-xl'>
          MOVIE QUOTES
        </h1>
        <button onClick={handleMobileMenu}>
          <HamMenu className='lg:hidden' />
        </button>
        <div className='flex gap-4 '>
          <NotificationBadge />
          <LanguageSwitchBtn className='mr-0' />
          <Button
            text={t('profile:logout')}
            className='bg-none border xs:hidden sm:block'
            onClick={() => logoutHandler()}
          />
        </div>
      </nav>
    </>
  );
};

export default MainHeader;
