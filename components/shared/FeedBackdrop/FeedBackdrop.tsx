import React from 'react';
import { ClickAndClass } from 'types';
import { useFeedBackdrop } from './useFeedBackdrop';

const FeedBackdrop: React.FC<ClickAndClass> = (props) => {
  const { onClick, className } = props;
  const { userCtx } = useFeedBackdrop();
  return (
    <>
      <div
        className={`${className} w-full h-full top-0 left-0 fixed bg-black ${
          userCtx.loader ? 'bg-opacity-100' : 'bg-opacity-20'
        } backdrop-filter  z-30`}
        onClick={onClick}
      ></div>
    </>
  );
};

export default FeedBackdrop;
