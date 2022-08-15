import { useSession } from 'next-auth/react';
import { useContext, useState } from 'react';
import { getUserInfo } from 'services';
import { AuthContext, UserContext } from 'store';

export const useFeedWrapper = () => {
  const [mobMenu, setMobMenu] = useState(false);
  const ctx = useContext(AuthContext);
  const userCtx = useContext(UserContext);
  const { data: session } = useSession();

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

  return { getData, mobMenu, setMobMenu, ctx, session };
};
