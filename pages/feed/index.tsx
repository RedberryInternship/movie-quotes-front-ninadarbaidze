import { useContext, useEffect, useState } from 'react';
import type { GetStaticProps } from 'next';
import { MainHeader, SideBar } from 'components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { getUserInfo } from 'services';
import { useRouter } from 'next/router';
import { AuthContext, UserContext } from 'store';
import { useSession } from 'next-auth/react';
import { FeedBackdrop, FeedModal } from 'components';

import { MovieForm } from 'components';

const Feed = () => {
  const [mobMenu, setMobMenu] = useState(false);
  const router = useRouter();
  const ctx = useContext(AuthContext);
  const userCtx = useContext(UserContext);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === 'unauthenticated' && !ctx.isLoggedIn) {
      router.push('/');
    }
  }, [ctx.isLoggedIn, router, status]);

  useEffect(() => {
    const getData = async () => {
      try {
        let response;
        let userId: any;

        if (session) {
          const token = session.accessToken;
          userId = session.userId;
          response = await getUserInfo(userId, token as string);
          userCtx.getUser(response.data.user);
        } else {
          response = await getUserInfo(ctx.userId, ctx.token);
          userCtx.getUser(response.data.user);
        }
      } catch (err: any) {}
    };

    getData();
  }, [ctx.userId, session]);

  return (
    <>
      <MainHeader setMobMenu={setMobMenu} mobMenu={mobMenu} />
      <FeedBackdrop />
      <FeedModal className=''>
        <div className='flex items-center justify-center h-16 border-b-[1px] border-gray15 border-opacity-20'>
          <h1 className='text-xl text-white'>Add Movie</h1>
        </div>
        <MovieForm />
      </FeedModal>

      <div
        className='flex w-screen h-[160vh] bg-background pt-10 '
        onClick={() => setMobMenu(false)}
      >
        <div className='lg:w-[22%]'>
          <SideBar />
        </div>
      </div>
    </>
  );
};

export default Feed;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['profile', 'home'])),
    },
  };
};
