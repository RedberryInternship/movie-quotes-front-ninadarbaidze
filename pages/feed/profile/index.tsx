import { useEffect } from 'react';
import type { GetStaticProps } from 'next';
import { EditProfile, FeedWrapper } from 'components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { useProfile } from 'hooks';

const Profile = () => {
  const { router, ctx, status } = useProfile();

  useEffect(() => {
    if (status === 'unauthenticated' && !ctx.isLoggedIn) {
      router.push('/');
    }
  }, [ctx.isLoggedIn, router, status]);

  return (
    <>
      <FeedWrapper>
        <EditProfile />
      </FeedWrapper>
    </>
  );
};

export default Profile;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['profile', 'home'])),
    },
  };
};
