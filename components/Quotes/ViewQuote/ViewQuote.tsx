import { FeedBackdrop, Comment, Like } from 'components';
import { QuoteModal } from '../QuoteModal';
import Image from 'next/image';
import { ViewQuoteTypes } from './types';

const ViewQuote: React.FC<ViewQuoteTypes> = (props) => {
  const { setViewQuote } = props;
  return (
    <div>
      <FeedBackdrop onClick={() => setViewQuote(false)} />
      <QuoteModal title='View Quote'>
        <div className='flex flex-col gap-4'>
          <div className='flex items-center relative'>
            <div className='py-2 italic placeholder:text-white text-white  pl-3 w-[100%] border-gray20 bg-mainDark border-[1px] rounded-[4px] px-12 truncate'>
              <p>ola mamasiga</p>
            </div>
            <p className='absolute right-4 cursor-pointer text-gray20'>Eng</p>
          </div>
          <div className='flex items-center relative '>
            <div className='py-2 italic placeholder:text-white text-white  pl-3 w-[100%] border-gray20 bg-mainDark border-[1px] rounded-[4px] px-12 truncate'>
              <p>სალამი</p>
            </div>
            <p className='absolute right-4 cursor-pointer text-gray20'>ქარ</p>
          </div>
          <div className='flex overflow-clip w-full relative rounded-[10px] object-cover'>
            <Image
              // loader={myLoader}
              src={'/assets/images/profile.png'}
              alt='imagePreview'
              objectFit='cover'
              width={'800px'}
              height={'450px'}
            />
          </div>
          <div className='flex items-center gap-4 text-white'>
            <button className='flex gap-1'>
              <p>3</p>
              <Comment />
            </button>
            <button className='flex gap-1'>
              <p>3</p>
              <Like />
            </button>
          </div>
        </div>
      </QuoteModal>
    </div>
  );
};

export default ViewQuote;
