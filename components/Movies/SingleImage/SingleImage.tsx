import React from 'react';
import Image from 'next/image';

const SingleImage = () => {
  return (
    <>
      <div className=' w-full '>
        <Image
          // loader={myLoader}
          src={'/assets/images/opana.png'}
          alt='profile-icon'
          width={350}
          height={350}
          objectFit='cover'
          className='rounded-xl'
        />
      </div>
    </>
  );
};

export default SingleImage;
