import React, { useState } from 'react';
import { Data, QuotesTypes } from 'types';
import Image from 'next/image';
import { Comment, Like, ManageQuoteModal } from 'components';
import { useQuoteItem } from './useQuoteItem';
import { useRouter } from 'next/router';

const QuoteItem: React.FC<QuotesTypes> = (props) => {
  const { quoteEN, quoteGE, image, userId, movieId, _id, setViewQuote } = props;
  const { myLoader } = useQuoteItem({ image });
  const [quoteHandler, setQuoteHandler] = useState(false);
  const router = useRouter();
  const quote = router.locale === 'ge' ? quoteGE : quoteEN;
  return (
    <div>
      <div
        className=' bg-mainDark w-full rounded-[10px] h-full'
        onMouseLeave={() => setQuoteHandler(false)}
      >
        <div className='px-6 py-5 flex flex-col gap-4'>
          <div className='flex items-center relative gap-2'>
            <div
              className='flex gap-[1px] absolute right-0 top-0 cursor-pointer'
              onClick={() => setQuoteHandler(true)}
            >
              <div className='h-1 w-1 bg-white rounded-full' />
              <div className='h-1 w-1 bg-white rounded-full' />
              <div className='h-1 w-1 bg-white rounded-full' />
            </div>
            {quoteHandler && (
              <ManageQuoteModal
                id={_id}
                setViewQuote={setViewQuote}
                setQuoteHandler={setQuoteHandler}
              />
            )}

            <div className='w-44 h-24 overflow-clip rounded-sm'>
              <Image
                loader={myLoader}
                src={`${process.env.NEXT_PUBLIC_API_URL}/${image}`}
                objectFit='cover'
                layout='responsive'
                width={600}
                height={600}
                alt='movie'
              />
            </div>
            <p className='text-white'>{`"${quote}"`}</p>
          </div>
          <div className='w-full h-[1px] bg-gray20' />

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
      </div>
    </div>
  );
};

export default QuoteItem;
