import { useContext, useEffect } from 'react';
import type { GetStaticProps } from 'next';
import { EditProfile, FeedWrapper } from 'components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { AuthContext } from 'store';
import { useSession } from 'next-auth/react';

const Profile = () => {
  const router = useRouter();
  const ctx = useContext(AuthContext);
  const { status } = useSession();

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
