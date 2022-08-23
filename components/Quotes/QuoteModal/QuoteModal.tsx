import { FeedModal, UserInfo } from 'components/shared';
import React from 'react';
import { ChildrenTitle } from 'types';

const QuoteModal: React.FC<ChildrenTitle> = (props) => {
  const { children, title } = props;
  return (
    <>
      <FeedModal className='w-[90%] md:w-[45%]'>
        <div className='flex items-center justify-center h-14 mb-2 border-b-[1px] border-gray15 border-opacity-20'>
          <h1 className='text-md text-white'>{title}</h1>
        </div>

        <div className='px-[4%]'>
          <div className='ml-0 '>
            <UserInfo className='px-1 mt-[1px] py-2' />
          </div>
          {children}
        </div>
      </FeedModal>
    </>
  );
};

export default QuoteModal;
