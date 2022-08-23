import type { GetStaticProps } from 'next';
import { FeedBackdrop, FeedWrapper, WriteNewQuote, Posts } from 'components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useFeed } from 'hooks/useFeed';
import { FeedQuoteForm } from 'components/Quotes/FeedQuoteForm';
import { QuoteModal } from 'components/Quotes/QuoteModal';

const Feed = () => {
  const { quoteCtx } = useFeed();

  return (
    <>
      <FeedWrapper className='flex flex-col items-center mt-10'>
        <div className='flex w-[65%] mr-[20%] '>
          <div className='flex items-center w-full gap-4 h-10'>
            <WriteNewQuote />
          </div>
          {quoteCtx.quoteCreationModal && (
            <>
              <FeedBackdrop onClick={quoteCtx.quoteCreationStateHandler} />
              <QuoteModal>
                <FeedQuoteForm />
              </QuoteModal>
            </>
          )}
        </div>
        <Posts />
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
