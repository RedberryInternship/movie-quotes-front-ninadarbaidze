import React from 'react';
import { ClassName } from 'types';

const Loader: React.FC<ClassName> = (props) => {
  const { className } = props;
  return (
    <div className={`${className} flex flex-col items-center w-full mt-8`}>
      <div className='w-8 h-8 border-t-2 border-b-2 border-red rounded-full animate-spin'></div>
    </div>
  );
};

export default Loader;
