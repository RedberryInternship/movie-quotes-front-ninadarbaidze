import type { GetStaticProps } from 'next';
import { FeedBackdrop, FeedWrapper, WriteNewQuote } from 'components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useFeed } from 'hooks/useFeed';
import { FeedQuoteForm } from 'components/Quotes/FeedQuoteForm';
import { QuoteModal } from 'components/Quotes/QuoteModal';

const Feed = () => {
  const { quoteCtx } = useFeed();

  return (
    <>
      <FeedWrapper className='flex justify-center mt-10'>
        <div className='flex items-center gap-4 w-[80%] h-10'>
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
