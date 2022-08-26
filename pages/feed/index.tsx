import type { GetStaticProps } from 'next';
import { FeedBackdrop, FeedWrapper, WriteNewQuote, Posts } from 'components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useFeed } from 'hooks/useFeed';
import { FeedQuoteForm } from 'components/Quotes/FeedQuoteForm';
import { QuoteModal } from 'components/Quotes/QuoteModal';

const Feed = () => {
  const { quoteCtx, quotes } = useFeed();

  return (
    <>
      <FeedWrapper className='flex flex-col translate-x-[10%] mt-10'>
        <div className='flex w-[65%]'>
          <div className='flex items-center w-full gap-4 h-10'>
            <WriteNewQuote />
          </div>
          {quoteCtx.quoteCreationModal && (
            <>
              <FeedBackdrop onClick={quoteCtx.quoteCreationStateHandler} />
              <QuoteModal title={'Add Quote'}>
                <FeedQuoteForm />
              </QuoteModal>
            </>
          )}
        </div>
        <ul className='w-full'>
          {quotes.map((quote) => (
            <li key={quote._id} className='w-full'>
              <Posts quote={quote} />
            </li>
          ))}
        </ul>
      </FeedWrapper>
    </>
  );
};

export default Feed;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'profile',
        'home',
        'genres',
        'movies',
        'quotes',
      ])),
    },
  };
};
