import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { likePost } from 'services';
import { AuthContext, UserContext } from 'store';
import { QuotesListTypes } from 'types';

export const usePosts = (props: { quote: QuotesListTypes }) => {
  const { quote } = props;
  const userCtx = useContext(UserContext);
  const router = useRouter();
  const currentLan: string | undefined = router!.locale;
  const { data: session } = useSession();
  const ctx = useContext(AuthContext);

  const myLoader = () => {
    return `${process.env.NEXT_PUBLIC_API_URL}/${userCtx.userState.profileImage}`;
  };
  const myLoader2 = () => {
    return `${process.env.NEXT_PUBLIC_API_URL}/${quote?.image}`;
  };

  const likeHandler = async () => {
    let token = session ? session.accessToken : ctx.token;
    const userId: string | Blob | unknown = session
      ? session.userId
      : ctx.userId;
    const data = {
      userId: userId as string,
      quoteId: quote._id as string,
    };
    await likePost(data, token as string);
  };

  return { userCtx, currentLan, myLoader, myLoader2, likeHandler, router };
};
