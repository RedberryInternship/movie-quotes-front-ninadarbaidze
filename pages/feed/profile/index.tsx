import type { GetStaticProps } from 'next';
import { EditProfile, FeedWrapper, AlertPopup, ErrorPopup } from 'components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { useProfile } from 'hooks/useProfile';

const Profile = () => {
  const { userCtx } = useProfile();

  return (
    <>
      <FeedWrapper className='mr-[10%] mt-10 relative'>
        {userCtx.successPopup && <AlertPopup />}
        {userCtx.errorPopup && <ErrorPopup />}
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
