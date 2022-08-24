import { FeedBackdrop, FeedButton, FeedQuoteForm, ViewQuote } from 'components';
import { QuoteModal } from 'components';
import { Data } from 'types';
import { QuoteItem } from '../QuoteItem';
import { useQuoteList } from './useQuoteList';

const QuoteList: React.FC<Data> = ({ data }) => {
  const {
    quoteCtx,
    viewQuote,
    setViewQuote,
    addQuoteModalHandler,
    closeQuoteModalHandler,
  } = useQuoteList();

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
