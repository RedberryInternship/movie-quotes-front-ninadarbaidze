import React from 'react';
import Image from 'next/image';
import { QuoteIcon } from 'components';

const SingleImage: React.FC<any> = (props) => {
  const { movieName, year, id, image } = props;

  return (
    <>
      <div className='flex flex-col gap-3 text-xl text-white'>
        <div>
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
          <h1 className='cursor-pointer'>
            {movieName} <span>({year})</span>
          </h1>
        </div>
        <div className='flex gap-2'>
          <span className='text-white text-md'>10</span>
          <QuoteIcon />
        </div>
      </div>
    </>
  );
};

export default SingleImage;
