import React from 'react';
import Image from 'next/image';
import { QuoteIcon } from 'components';
import { useSingleImage } from './useSingleImage';
import { SingleImageType } from './types';

const SingleImage: React.FC<SingleImageType> = (props) => {
  const { movieName, year, id, image, quotesQuantity } = props;
  const { router, myLoader } = useSingleImage({ image } as unknown as string);

  return (
    <>
      <div className='flex flex-col gap-3 text-xl text-white'>
        <div
          className='cursor-pointer'
          onClick={() => router.push(`/feed/movies/${id}`)}
        >
          <div className=' w-full '>
            <Image
              loader={myLoader}
              src={`${process.env.NEXT_PUBLIC_API_URL}/${image}`}
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
          <span className='text-white text-md'>{quotesQuantity}</span>
          <QuoteIcon />
        </div>
      </div>
    </>
  );
};

export default SingleImage;
