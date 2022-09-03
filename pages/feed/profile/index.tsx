import type { GetStaticProps } from 'next';
import { EditProfile, FeedWrapper } from 'components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { useProfile } from 'hooks/useProfile';

const Profile = () => {
  useProfile();

  return (
    <>
      <FeedWrapper className='mr-[10%] mt-10'>
        <EditProfile />
      </FeedWrapper>
    </>
  );
};

export default Profile;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'profile',
        'home',
        'movies',
        'quotes',
      ])),
    },
  };
};
