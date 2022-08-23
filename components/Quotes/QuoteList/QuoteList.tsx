import { FeedBackdrop, FeedButton, FeedQuoteForm, ViewQuote } from 'components';
import { QuoteModal } from 'components';
import React, { useContext, useState } from 'react';
import { MovieContext, QuoteContext } from 'store';
import { Data } from 'types';
import { QuoteItem } from '../QuoteItem';

const QuoteList: React.FC<Data> = ({ data }) => {
  const quoteCtx = useContext(QuoteContext);
  const movieCtx = useContext(MovieContext);
  const [viewQuote, setViewQuote] = useState(false);

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
      {viewQuote && <ViewQuote setViewQuote={setViewQuote} />}
      <div className='flex items-center gap-4 mt-8 h-12'>
        <h1 className='text-white text-xl sm:text-2xl font-helvetica_ge font-thin'>
          Quotes (Total: {data?.quotes.length})
        </h1>
        <div className='bg-gray20 w-[1px] rounded-full h-6'></div>
        <FeedButton text={'Add quote'} onClick={addQuoteModalHandler} />
      </div>
      <div>
        <ul>
          {data?.quotes.map((quote) => (
            <li key={quote._id} className='mt-6'>
              <QuoteItem {...quote} setViewQuote={setViewQuote} />
            </li>
          ))}
        </ul>
      </div>
      {quoteCtx.quoteCreationModal && (
        <>
          <FeedBackdrop onClick={closeQuoteModalHandler} />
          <QuoteModal title='Add Quote'>
            <FeedQuoteForm data={data} />
          </QuoteModal>
        </>
      )}
    </>
  );
};

export default QuoteList;
