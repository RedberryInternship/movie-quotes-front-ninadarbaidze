import React from 'react';
import Image from 'next/image';
import { useSingleMovie } from './useSingleMovie';
import { Data } from 'types';

const SingleMovie: React.FC<Data> = ({ data }) => {
  const { myLoader, t } = useSingleMovie();
  return (
    <div>
      <div className='flex gap-4'>
        <div className='w-52 h-32 rounded-xl overflow-clip'>
          <Image
            loader={myLoader}
            src={`${process.env.NEXT_PUBLIC_API_URL}/${data!.image}`}
            objectFit='cover'
            layout='responsive'
            width={600}
            height={600}
            alt='movie'
          />
        </div>
        <div className='flex flex-col gap-4'>
          <h2 className='text-beidge text-xl md:w-none'>
            {data!.name} ({data!.year})
          </h2>
          <ul className='flex gap-1 text-sm text-white'>
            {data!.genres[0].split(',').map((genre: string) => (
              <li key={genre} className='bg-gray20 px-2 rounded-[4px]'>
                {t(`${genre}`)}
              </li>
            ))}
          </ul>
          <div className='flex gap-2'>
            <h3 className='text-gray10 text-lg'>{t('movies:director')}:</h3>
            <span className='text-white text-lg'>{data!.director}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
