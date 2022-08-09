import {
  LanguageSwitchBtn,
  Button,
  NotificationBadge,
  HamMenu,
} from 'components';
import useMainHeader from './useMainHeader';
import { MobMenuTypes } from 'types';
import { MobMenu } from 'components';

const MainHeader: React.FC<MobMenuTypes> = (props) => {
  const { mobMenu, setMobMenu } = props;
  const { t, logoutHandler } = useMainHeader();

  const handleMobMenu = () => {
    setMobMenu(true);
  };

  return (
    <>
      {mobMenu && <MobMenu />}

      <nav className='flex justify-between items-center px-[5%] py-[5%] lg:py-[2%] bg-gray30 '>
        <h1 className='xs:hidden lg:block font-helvetica_en hidden text-beidge text-xs lg:text-xl'>
          MOVIE QUOTES
        </h1>
        <HamMenu onClick={handleMobMenu} className='lg:hidden' />
        <div className='flex gap-4 '>
          <NotificationBadge />
          <LanguageSwitchBtn page={'profile'} className='mr-0' />
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
