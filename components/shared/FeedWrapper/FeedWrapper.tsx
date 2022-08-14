import { useContext, useEffect, useState } from 'react';
import { MainHeader, SideBar } from 'components';
import { getUserInfo } from 'services';
import { AuthContext, UserContext } from 'store';
import { useSession } from 'next-auth/react';
import { Children } from 'types';

const FeedWrapper: React.FC<Children> = (props) => {
  const { children } = props;
  const [mobMenu, setMobMenu] = useState(false);
  const ctx = useContext(AuthContext);
  const userCtx = useContext(UserContext);
  const { data: session } = useSession();

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
      <MainHeader setMobMenu={setMobMenu} mobMenu={mobMenu} />

      <div
        className='flex w-screen h-[160vh] bg-background pt-10 '
        onClick={() => setMobMenu(false)}
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
