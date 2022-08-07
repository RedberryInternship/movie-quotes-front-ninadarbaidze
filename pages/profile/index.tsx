import { useState } from 'react';
import type { GetStaticProps } from 'next';
import { MainHeader, SideBar, EditProfile } from 'components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Profile = () => {
  const [mobMenu, setMobMenu] = useState(false);

  return (
    <>
      <MainHeader setMobMenu={setMobMenu} mobMenu={mobMenu} />

      <div
        className='flex w-screen h-[160vh] bg-background pt-10 '
        onClick={() => setMobMenu(false)}
      >
        <div className='lg:w-[22%]'>
          <SideBar />
        </div>
        <div className='w-full md:px-[10%] lg:w-[60%] lg:pl-[10%] lg:px-0 '>
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
