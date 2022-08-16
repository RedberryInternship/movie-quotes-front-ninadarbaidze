import React from 'react';
import { OnClick } from 'types';

const FeedBackdrop: React.FC<OnClick> = (props) => {
  const { onClick } = props;
  return (
    <>
      <div
        className='w-full h-full top-0 left-0 fixed bg-feedBackground opacity-80 backdrop-filter backdrop-blur-3xl z-20'
        onClick={onClick}
      ></div>
    </>
  );
};

export default FeedBackdrop;
