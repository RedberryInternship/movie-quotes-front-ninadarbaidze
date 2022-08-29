import { BellIcon } from 'components';
import { useNotificationBadge } from './useNotificationBadge';

const NotificationBadge = () => {
  const { quoteCtx } = useNotificationBadge();
  return (
    <>
      <div className='relative z-20'>
        <button onClick={() => quoteCtx.notificationStateHandler()}>
          <BellIcon />
        </button>
        <div className='flex flex-col absolute left-3 bottom-3 justify-center items-center'>
          <div className=' w-5 h-5 bg-red2 rounded-full' />
          <p className='absolute top-[1px] text-white text-center text-sm'>2</p>
        </div>
      </div>
    </>
  );
};

export default NotificationBadge;
