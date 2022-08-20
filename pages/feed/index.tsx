import type { GetStaticProps } from 'next';
import {
  FeedBackdrop,
  FeedModal,
  FeedWrapper,
  UserInfo,
  WriteNewQuote,
} from 'components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { useFeed } from 'hooks/useFeed';
import { useContext } from 'react';
import { QuoteContext } from 'store';
import { FeedQuoteForm } from 'components/Quotes/FeedQuoteForm';

const Feed = () => {
  const quoteCtx = useContext(QuoteContext);

  useFeed();

  return (
    <>
      <FeedWrapper className='flex justify-center mt-10'>
        <div className='flex items-center gap-4 w-[80%] h-10'>
          <WriteNewQuote />
        </div>

        {/* modal */}

        <FeedBackdrop onClick={quoteCtx.quoteCreationStateHandler} />
        <FeedModal className='px-[2%] w-[90%] md:w-[50%]'>
          <div className='flex items-center justify-center h-14 mb-2 border-b-[1px] border-gray15 border-opacity-20'>
            <h1 className='text-md text-white'>Add quote</h1>
          </div>
          <div className='ml-0'>
            <UserInfo className='px-1 mt-[1px] py-2' />
          </div>
          <FeedQuoteForm />
        </FeedModal>
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
      ])),
    },
  };
};
