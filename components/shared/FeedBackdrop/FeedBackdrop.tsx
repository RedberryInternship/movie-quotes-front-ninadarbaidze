import React from 'react';
import { OnClick } from 'types';

const FeedBackdrop: React.FC<OnClick> = (props) => {
  const { onClick } = props;
  return (
    <>
      <div
        className='w-full h-full top-0 left-0 fixed bg-black bg-opacity-20 backdrop-filter backdrop-blur-sm z-20'
        onClick={onClick}
      ></div>
    </>
  );
};

export default FeedBackdrop;
