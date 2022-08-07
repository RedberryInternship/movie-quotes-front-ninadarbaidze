import { MainHeader, SideBar, EditProfile } from 'components';
import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Profile = () => {
  return (
    <>
      <MainHeader />

      <div className='flex w-screen h-[160vh] bg-background pt-10 '>
        <div className='w-[20%]'>
          <SideBar />
        </div>
        <div className='w-[60%] pl-[10%] '>
          <EditProfile />
        </div>
      </div>
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
