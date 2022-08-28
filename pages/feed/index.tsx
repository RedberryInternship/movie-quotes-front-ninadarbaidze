import type { GetStaticProps } from 'next';
import { FeedBackdrop, FeedWrapper, WriteNewQuote, Posts } from 'components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useFeed } from 'hooks/useFeed';
import { FeedQuoteForm } from 'components/Quotes/FeedQuoteForm';
import { QuoteModal } from 'components/Quotes/QuoteModal';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';

const Feed = () => {
  const {
    quoteCtx,
    quotes,
    setPage,
    page,
    total,
    searchQuery,
    setSearchQuery,
  } = useFeed();

  return (
    <>
      {quoteCtx.quoteCreationModal && (
        <>
          <FeedBackdrop onClick={quoteCtx.quoteCreationStateHandler} />
          <QuoteModal title={'Add Quote'}>
            <FeedQuoteForm />
          </QuoteModal>
        </>
      )}
      <FeedWrapper className='flex flex-col items-center mt-10  lg:pr-[12%]'>
        <div className='flex w-[75%]'>
          <div className='flex items-center w-full gap-4 h-10'>
            <WriteNewQuote
              setSearchQuery={setSearchQuery}
              searchQuery={searchQuery}
            />
          </div>
        </div>
        <ul className='w-[75%]'>
          <InfiniteScroll
            dataLength={quotes.length}
            next={() => setPage(page + 1)}
            hasMore={total === quotes.length ? false : true}
            loader={
              <div className='flex flex-col items-center w-full mt-8'>
                <div className='w-8 h-8 border-t-2 border-b-2 border-red rounded-full animate-spin'></div>
              </div>
            }
            endMessage={
              <p className='flex justify-center text-gray30 text-lg mt-6'>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            {quotes
              // .filter(
              //   (quote) => quote.quoteEN.includes(searchQuery)
              //   // movie.props.movieName.toLowerCase().includes(searchQuery)
              // )
              .map((quote) => (
                <li key={quote._id} className='w-full'>
                  <Posts quote={quote} />
                </li>
              ))}
          </InfiniteScroll>
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
