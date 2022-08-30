import { BellIcon } from 'components';
import { useNotificationBadge } from './useNotificationBadge';

const NotificationBadge = (props) => {
  const { totalNotifications } = props;
  const { quoteCtx } = useNotificationBadge();
  return (
    <>
      <div
        className='relative z-20 cursor-pointer'
        onClick={() => quoteCtx.notificationStateHandler()}
      >
        <button>
          <BellIcon />
        </button>
        <div className='flex flex-col absolute left-3 bottom-3 justify-center items-center'>
          <div className=' w-5 h-5 bg-red2 rounded-full' />
          <p className='absolute top-[1px] text-white text-center text-sm'>
            {totalNotifications}
          </p>
        </div>
      </div>
    </>
  );
};

export default NotificationBadge;
