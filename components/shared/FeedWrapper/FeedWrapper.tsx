import { useEffect } from 'react';
import { MainHeader, SideBar } from 'components';
import { Children } from 'types';
import { useFeedWrapper } from './useFeedWrapper';
import { getUserInfo } from 'services';

const FeedWrapper: React.FC<Children> = (props) => {
  const { children } = props;
  const { userCtx, ctx, session, mobileMenu, setMobileMenu } = useFeedWrapper();

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
  }, [ctx.token, ctx.userId, session]);

  return (
    <>
      <MainHeader setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />

      <div
        className='flex w-screen h-[100%] py-[100vh] bg-background pt-10 '
        onClick={() => setMobileMenu(false)}
      >
        <div className='lg:w-[22%] z-0'>
          <SideBar />
        </div>
        <div className='w-full md:px-[10%] lg:w-[70%] lg:px-0 '>{children}</div>
      </div>
    </>
  );
};

export default FeedWrapper;
