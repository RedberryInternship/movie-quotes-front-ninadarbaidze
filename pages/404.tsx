import { Button } from 'components';
import { useError } from 'hooks';
import Image from 'next/image';

const Custom404 = () => {
  const { router } = useError();
  return (
    <div className='flex flex-col items-center justify-center gap-6 bg-mainDark w-screen h-screen'>
      <div className=' w-52'>
        <Image
          src='/assets/images/404-ghost.png'
          alt='404-image'
          width={'500px'}
          height={'500px'}
        />
      </div>
      <h1 className='text-white text-5xl font-bold'>Whoops!</h1>
      <h2 className='text-white text-xl'>
        We cant see the page you are looking for
      </h2>
      <Button
        text={'Return Home'}
        onClick={() => router.push('/')}
        className='bg-red hover:bg-redHover'
      />
    </div>
  );
};

export default Custom404;
