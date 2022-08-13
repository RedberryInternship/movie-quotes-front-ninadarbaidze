import Link from 'next/link';
import { HomeIcon, MovieIcon } from 'components';
import { useSideBar } from './useSideBar';

import { UserInfo } from 'components';

const SideBar = () => {
  const { t } = useSideBar();

  return (
    <>
      <div className='xs:hidden lg:flex flex-col gap-8  h-full '>
        <UserInfo useLink={true} />
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
