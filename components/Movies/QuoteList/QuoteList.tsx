import { FeedBackdrop, FeedButton, FeedQuoteForm } from 'components';
import { QuoteModal } from 'components/Quotes/QuoteModal';
import React, { useContext } from 'react';
import { MovieContext, QuoteContext } from 'store';
import { Data } from 'types';

const QuoteList: React.FC<Data> = ({ data }) => {
  const quoteCtx = useContext(QuoteContext);
  const movieCtx = useContext(MovieContext);
  const addQuoteModalHandler = () => {
    quoteCtx.quoteCreationStateHandler();
    quoteCtx.movieQuoteCreationHandler();
  };
  const closeQuoteModalHandler = () => {
    quoteCtx.quoteCreationStateHandler();
    quoteCtx.movieQuoteCreationHandler();
    console.log(movieCtx.movieState);
  };

  return (
    <>
      <div className='flex items-center gap-4 mt-8 h-12'>
        <h1 className='text-white text-xl sm:text-2xl font-helvetica_ge font-thin'>
          Quotes (Total: 7)
        </h1>
        <div className='bg-gray20 w-[1px] rounded-full h-6'></div>
        <FeedButton text={'Add quote'} onClick={addQuoteModalHandler} />
        {quoteCtx.quoteCreationModal && (
          <>
            <FeedBackdrop onClick={closeQuoteModalHandler} />
            <QuoteModal>
              <FeedQuoteForm data={data} />
            </QuoteModal>
          </>
        )}
      </div>
    </>
  );
};

export default QuoteList;
