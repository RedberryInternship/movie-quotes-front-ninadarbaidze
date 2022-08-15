import React from 'react';
import Image from 'next/image';
import { EditBtn, Trash } from 'components';

const MovieDetails = () => {
  return (
    <div className=''>
      <h1 className='text-white text-xl sm:text-2xl font-helvetica_ge font-thin'>
        Movie Description
      </h1>
      <div className='flex gap-4 mt-12'>
        <div className='w-3/5 h-[23rem] rounded-xl overflow-clip'>
          <Image
            src='/assets/images/image-1.png'
            className=''
            objectFit='cover'
            layout='responsive'
            width={600}
            height={600}
            alt='movie'
          />
        </div>
        <div className='w-2/5 flex flex-col relative gap-4'>
          <div className='flex absolute right-0 justify-around w-32 py-2 px-4 rounded-[10px] bg-gray50'>
            <EditBtn />
            <div className='bg-gray w-[1px] h-4' />
            <Trash />
          </div>
          <h2 className='text-beidge text-2xl'>name (year)</h2>
          <ul className='flex gap-1 text-lg text-white'>
            <li className='bg-gray20 px-2 rounded-[4px]'>Drama</li>
            <li className='bg-gray20 px-2 rounded-[4px]'>Comedy</li>
          </ul>
          <div className='flex gap-2'>
            <h3 className='text-gray10 text-lg'>director:</h3>
            <span className='text-white text-lg'>nickoloza</span>
          </div>
          <div className='flex gap-2'>
            <h3 className='text-gray10 text-lg'>budget:</h3>
            <span className='text-white text-lg'>2000</span>
          </div>
          <p className='text-gray10 text-lg'>
            In a nursing home, resident Duke reads a romance story to an old
            woman who has senile dementia with memory loss. In the late 1930s,
            wealthy seventeen year-old Allie Hamilton is spending summer
            vacation in Seabrook. Local worker Noah Calhoun meets Allie at a
            carnival{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
