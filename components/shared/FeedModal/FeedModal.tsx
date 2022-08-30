import React from 'react';
import { ChildrenAndClass } from 'types';

const FeedModal: React.FC<ChildrenAndClass> = (props) => {
  const { className, children } = props;
  return (
    <>
      <div
        className={`${className} fixed overflow-auto top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] bg-mainDark rounded-[12px]   z-40 `}
      >
        {children}
      </div>
    </>
  );
};

export default FeedModal;
