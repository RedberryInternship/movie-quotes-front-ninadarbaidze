import Link from 'next/link';
import { HomeIcon, MovieIcon } from 'components';
import { useMobMenu } from './useMobMenu';
import { UserInfo } from 'components';

const MobMenu = () => {
  const { t } = useMobMenu();
  return (
    <div className='lg:hidden bg-mainDark w-[80%] h-[70%] rounded-[12px] absolute top-0 left-0 z-50'>
      <div className='flex flex-col gap-8  h-full '>
        <UserInfo useLink={true} />
        <div className='flex flex-col gap-8 pl-[13%] justify-start'>
          <div className='flex items-center '>
            <div className='w-12'>
              <HomeIcon />
            </div>
            <Link href=''>
              <a className='text-white'>{t('profile:feed')}</a>
            </Link>
          </div>
          <div className='flex items-center'>
            <div className='w-12'>
              <MovieIcon />
            </div>
            <Link href=''>
              <a className='text-white'>{t('profile:movieList')}</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobMenu;
