import {
  EditQuoteModal,
  FeedBackdrop,
  FeedButton,
  FeedQuoteForm,
  ViewQuote,
  QuoteItem,
} from 'components';
import { QuoteModal } from 'components';
import { Data } from 'types';
import { useQuoteList } from './useQuoteList';

const QuoteList: React.FC<Data> = (props) => {
  const { data } = props;
  const {
    t,
    quoteCtx,
    viewQuote,
    setViewQuote,
    addQuoteModalHandler,
    closeQuoteModalHandler,
  } = useQuoteList();

  return (
    <>
      {viewQuote && <ViewQuote setViewQuote={setViewQuote} />}
      {quoteCtx.editQuoteModal && <EditQuoteModal />}

      <div className='flex items-center gap-4 mt-8 h-12'>
        <h1 className='text-white text-xl sm:text-2xl font-helvetica_ge font-thin'>
          {`${t('quotes:quotes')} (${t('quotes:total')}: ${
            data?.quotes.length
          })`}
        </h1>
        <div className='bg-gray20 w-[1px] rounded-full h-6'></div>
        <FeedButton
          text={t('quotes:addQtBtn')}
          onClick={addQuoteModalHandler}
        />
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
          <FeedBackdrop
            onClick={closeQuoteModalHandler}
            className='backdrop-blur-sm'
          />
          <QuoteModal title={t('quotes:addQt')}>
            <FeedQuoteForm data={data} />
          </QuoteModal>
        </>
      )}
    </>
  );
};

export default QuoteList;
