import { LanguageSwitchBtn, Button, NotificationBadge } from 'components';
import useMainHeader from './useMainHeader';

const MainHeader = () => {
  const { t } = useMainHeader();
  return (
    <>
      <nav className='flex justify-between items-center px-[5%] py-[5%] lg:py-[2%] bg-mainDark'>
        <h1 className='font-helvetica_en text-beidge text-xs lg:text-xl'>
          MOVIE QUOTES
        </h1>
        <div className='flex items-center gap-4'>
          <NotificationBadge />
          <LanguageSwitchBtn page={'profile'} />
          <Button text={t('profile:logout')} className='bg-none border' />
        </div>
      </nav>
    </>
  );
};

export default MainHeader;
