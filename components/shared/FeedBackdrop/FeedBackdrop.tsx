import React from 'react';

const FeedBackdrop = () => {
  return (
    <>
      <div
        className='w-full h-full top-0 fixed bg-feedBackground opacity-80 backdrop-filter backdrop-blur-3xl z-20'
        // onClick={closeModalHandler}
      ></div>
    </>
  );
};

export default FeedBackdrop;
