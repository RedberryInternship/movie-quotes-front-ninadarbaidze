import React from 'react';
import { ClickAndClass } from 'types';

const FeedBackdrop: React.FC<ClickAndClass> = (props) => {
  const { onClick, className } = props;
  return (
    <>
      <div
        className={`${className} w-full h-full top-0 left-0 fixed bg-black bg-opacity-20 backdrop-filter  z-30`}
        onClick={onClick}
      ></div>
    </>
  );
};

export default FeedBackdrop;
