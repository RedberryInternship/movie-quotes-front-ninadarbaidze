import Link from 'next/link';
import { Button, HomeIcon, MovieIcon } from 'components';
import { useMobileMenu } from './useMobileMenu';
import { UserInfo } from 'components';

const MobileMenu = () => {
  const { t, movieIconState, homeIconState, logoutHandler } = useMobileMenu();
  return (
    <div className='lg:hidden bg-mainDark w-[80%] h-[70%] rounded-[12px] absolute top-0 left-0 z-50'>
      <div className='flex flex-col justify-between gap-8  h-full '>
        <div className='flex flex-col gap-12'>
          <UserInfo useLink={true} className='px-[10%] mt-10' />
          <div className='flex flex-col gap-8 pl-[13%] justify-start'>
            <div className='flex items-center '>
              <div className='w-12'>
                <HomeIcon className={homeIconState ? 'red' : 'white'} />{' '}
              </div>
              <Link href='/feed'>
                <a className='text-white'>{t('profile:feed')}</a>
              </Link>
            </div>
            <div className='flex items-center'>
              <div className='w-12'>
                <MovieIcon className={movieIconState ? 'red' : 'white'} />
              </div>
              <Link href='/feed/movies'>
                <a className='text-white'>{t('profile:movieList')}</a>
              </Link>
            </div>
          </div>
        </div>
        <div className='px-[10%] pb-12'>
          <Button
            text={t('profile:logout')}
            className='bg-none border w-32 sm:hidden text-center '
            onClick={() => logoutHandler()}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
