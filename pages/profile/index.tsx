import { useContext, useEffect, useState } from 'react';
import type { GetStaticProps } from 'next';
import { MainHeader, SideBar, EditProfile } from 'components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getUserInfo } from 'services';
import { useRouter } from 'next/router';
import { AuthContext, UserContext } from 'store';
import { useSession } from 'next-auth/react';

const Profile = () => {
  const [mobMenu, setMobMenu] = useState(false);
  const router = useRouter();
  const ctx = useContext(AuthContext);
  const userCtx = useContext(UserContext);
  const session = useSession();

  useEffect(() => {
    const getData = async () => {
      try {
        let response;
        let userId: any;

        if (session.data) {
          userId = session.data.userId;
          response = await getUserInfo(userId);
          userCtx.getUser(response.data.user);
        } else {
          response = await getUserInfo(ctx.userId);
          userCtx.getUser(response.data.user);
        }
      } catch (err: any) {
        console.log(err);
      }
    };

    getData();
  }, [ctx.userId, session.data]);

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
