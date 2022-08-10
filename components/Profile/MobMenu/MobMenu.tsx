import Image from 'next/image';
import Link from 'next/link';
import { HomeIcon, MovieIcon } from 'components';
import { useMobMenu } from './useMobMenu';
import { imagePreviewHandler } from './helper';

const MobMenu = () => {
  const { t, session, myLoader, userCtx } = useMobMenu();
  return (
    <div className='lg:hidden bg-mainDark w-[80%] h-[70%] rounded-[12px] absolute top-0 left-0 z-50'>
      <div className='flex flex-col gap-8  h-full '>
        <div className='flex items-center px-[10%] mt-10 gap-3'>
          <div className='w-12 h-12 rounded-full overflow-clip border-2 border-red'>
            <div className='object-cover'>
              <Image
                loader={myLoader}
                src={imagePreviewHandler(userCtx, session)}
                alt='profile-icon'
                width={50}
                height={50}
              />
            </div>
          </div>
          <div>
            <p className='text-white'>{userCtx.userState.username}</p>
            <Link href='/feed/profile'>
              <a className='text-gray10 text-xs'>{t('profile:editProfile')}</a>
            </Link>
          </div>
        </div>
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
