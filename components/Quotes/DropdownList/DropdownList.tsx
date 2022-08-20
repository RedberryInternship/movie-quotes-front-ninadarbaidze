import { CheckIcon } from '@heroicons/react/solid';
import React from 'react';
import Image from 'next/image';

const DropdownList: React.FC<any> = (props) => {
  const { id, image, movieName, onClick, selectedMovie } = props;
  const myLoader = () => {
    return `${process.env.NEXT_PUBLIC_API_URL}/${image as string}`;
  };
  return (
    <>
      <li
        className='flex relative items-center gap-5 py-2 pl-[1%] border-b-[1px] border-dashed border-gray cursor-pointer'
        onClick={onClick}
      >
        <div>
          <Image
            loader={myLoader}
            src={`${process.env.NEXT_PUBLIC_API_URL}/${image}`}
            width='70'
            height='70'
            alt='movies'
            className='rounded-2xl overflow-clip'
          />
        </div>
        <h3>{movieName}</h3>
        {selectedMovie === id && (
          <CheckIcon className='absolute left-[93%] w-6' />
        )}
      </li>
    </>
  );
};

export default DropdownList;
