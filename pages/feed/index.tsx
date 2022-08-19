import type { GetStaticProps } from 'next';
import { FeedWrapper } from 'components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { useFeed } from 'hooks/useFeed';

const Feed = () => {
  useFeed();

  return (
    <>
      <FeedWrapper>
        <div></div>
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
