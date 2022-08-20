import { FeedModal, UserInfo } from 'components/shared';
import React from 'react';
import { Children } from 'types';

const QuoteModal: React.FC<Children> = (props) => {
  const { children } = props;
  return (
    <>
      <FeedModal className='px-[2%] w-[90%] md:w-[50%]'>
        <div className='flex items-center justify-center h-14 mb-2 border-b-[1px] border-gray15 border-opacity-20'>
          <h1 className='text-md text-white'>Add quote</h1>
        </div>
        <div className='ml-0'>
          <UserInfo className='px-1 mt-[1px] py-2' />
        </div>
        {children}
      </FeedModal>
    </>
  );
};

export default QuoteModal;
