import React from 'react';
import Image from 'next/image';
import { Comment, Like } from 'components';

const Posts = () => {
  return (
    <div className='flex flex-col gap-3 w-[65%] mr-[20%] mt-4 h-full bg-mainDark rounded-[12px] px-[2%] '>
      <div className='flex items-center gap-2 pt-[2%]'>
        <div className='object-cover w-12 h-12 rounded-full overflow-clip border-2'>
          <Image
            // loader={myLoader}
            src={'/assets/images/profile.png'}
            alt='profile-icon'
            width={50}
            height={50}
          />
        </div>
        <div>
          <p className='text-white font-base'>Username goes here</p>
        </div>
      </div>
      <div className='flex gap-2 text-white'>
        <p className='text-white font-base'>Quote goes here</p>
        <p>
          movie- <span className='text-beidge'>movie name. </span>
          <span>(2020)</span>
        </p>
      </div>
      <div className='flex overflow-clip w-full relative rounded-[10px] object-cover'>
        <Image
          // loader={myLoader}
          src={'/assets/images/image-1.png'}
          alt='imagePreview'
          objectFit='cover'
          width={'800px'}
          height={'500px'}
        />
      </div>
      <div className='flex items-center gap-4 text-white'>
        <button className='flex gap-1'>
          <p>3</p>
          <Comment />
        </button>
        <button className='flex gap-1'>
          <p>3</p>
          <Like />
        </button>
      </div>
      <div className='w-full h-[1px] bg-gray15 bg-opacity-30' />
    </div>
  );
};

export default Posts;
