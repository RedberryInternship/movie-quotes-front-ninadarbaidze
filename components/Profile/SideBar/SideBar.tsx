import Image from 'next/image';
import Link from 'next/link';
import { HomeIcon, MovieIcon } from 'components';
import { useSideBar } from './useSideBar';
import { imagePreviewHandler } from './helper';

const SideBar = () => {
  const { t, session, myLoader, userCtx } = useSideBar();

  return (
    <>
      <div className='xs:hidden lg:flex flex-col gap-8  h-full '>
        <div className='flex items-center px-[20%] mt-10 gap-3'>
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
        <div className='flex flex-col gap-8 pl-[23%] justify-start'>
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
    </>
  );
};

export default SideBar;
