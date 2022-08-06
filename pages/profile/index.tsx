import { MainHeader, SideBar } from 'components';
import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Profile = () => {
  return (
    <>
      <MainHeader />

      <div className='w-screen h-screen bg-background'>
        <SideBar />
      </div>
    </>
  );
};

export default Profile;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['profile'])),
    },
  };
};
