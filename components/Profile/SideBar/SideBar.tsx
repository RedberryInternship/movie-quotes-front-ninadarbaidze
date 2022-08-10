import Image from 'next/image';
import Link from 'next/link';
import { HomeIcon, MovieIcon } from 'components';
import { useSideBar } from './useSideBar';
import { useContext } from 'react';
import { UserContext } from 'store';
import { useSession } from 'next-auth/react';
import { imagePreviewHandler } from './helper';

const SideBar = () => {
  const { t } = useSideBar();
  const userCtx = useContext(UserContext);
  const { data: session } = useSession();

  const myLoader = () => {
    const defaultProfileImg = `/assets/images/profile.png`;
    if (session?.user && !userCtx.userState.profileImage) {
      return session!.user.image as string;
    } else if (userCtx.userState.profileImage) {
      return `${process.env.NEXT_PUBLIC_API_URL}/${userCtx.userState.profileImage}`;
    } else {
      return defaultProfileImg;
    }
  };
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
