import {
  LanguageSwitchBtn,
  Button,
  NotificationBadge,
  HamMenu,
  NotificationItem,
} from 'components';
import useMainHeader from './useMainHeader';
import { MobileMenuTypes } from 'types';
import { MobileMenu } from 'components';
import { NotificationModal } from '../NotificationModal';
import { motion } from 'framer-motion';

const MainHeader: React.FC<MobileMenuTypes> = (props) => {
  const { mobileMenu, setMobileMenu } = props;
  const {
    t,
    logoutHandler,
    quoteCtx,
    notifications,
    totalNotifications,
    readNotificationsHandler,
    variants,
    router,
    handleMobileMenu,
  } = useMainHeader({ setMobileMenu });

  return (
    <>
      {mobileMenu && <MobileMenu />}

      <nav className='flex justify-between absolute w-full items-center px-[5%] py-[5%] lg:py-[2%] bg-gray30'>
        <h1
          className='xs:hidden lg:block font-helvetica_en hidden text-beidge text-xs lg:text-xl cursor-pointer'
          onClick={() => router.push('/')}
        >
          MOVIE QUOTES
        </h1>
        <button onClick={handleMobileMenu}>
          <HamMenu className='lg:hidden' />
        </button>
        <div className='flex gap-4 relative'>
          <NotificationBadge totalNotifications={totalNotifications} />

          {quoteCtx.notificationState && (
            <NotificationModal notifications={notifications} />
          )}

          {readNotificationsHandler() && (
            <motion.div
              variants={variants}
              initial='initial'
              animate='visible'
              className='absolute bg-mainDark w-[24rem] top-[12vh] sm:top-[15vh] right-[-1rem]'
            >
              <NotificationItem notificationData={notifications[0]} />
            </motion.div>
          )}

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
          className='w-full h-full top-0 left-0 fixed bg-transparent z-20'
          onClick={() => quoteCtx.notificationStateHandler(false)}
        ></div>
      )}
    </>
  );
};

export default MainHeader;
