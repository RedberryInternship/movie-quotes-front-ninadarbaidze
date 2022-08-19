import type { GetStaticProps } from 'next';
import { FeedBackdrop, FeedWrapper, WriteNewQuote } from 'components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { useFeed } from 'hooks/useFeed';
import { useContext } from 'react';
import { QuoteContext } from 'store';

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
        {quoteCtx.quoteCreationModal && (
          <FeedBackdrop onClick={quoteCtx.quoteCreationStateHandler} />
        )}
      </FeedWrapper>
    </>
  );
};

export default Feed;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['profile', 'home', 'genres'])),
    },
  };
};
