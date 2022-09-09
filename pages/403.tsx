import { Button } from 'components';
import { useError } from 'hooks';
import Image from 'next/image';

const Custom403 = () => {
  const { router } = useError();
  return (
    <div className='flex flex-col items-center justify-center gap-6 bg-mainDark w-screen h-screen'>
      <div className='w-60'>
        <Image
          src='/assets/images/403-wizard.png'
          alt='404-image'
          width={'500px'}
          height={'500px'}
        />
      </div>
      <h1 className='text-white text-5xl font-bold'>You shall not pass!</h1>
      <h2 className='text-white text-xl'>
        Sorry, but you don’t have permission to access this page
      </h2>
      <Button
        text={'Return Home'}
        onClick={() => router.push('/')}
        className='bg-red hover:bg-redHover'
      />
    </div>
  );
};

export default Custom403;
