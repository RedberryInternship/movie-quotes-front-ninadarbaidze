import { useSession } from 'next-auth/react';
import { useContext, useState } from 'react';
import { AuthContext, UserContext } from 'store';

export const useFeedWrapper = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const ctx = useContext(AuthContext);
  const userCtx = useContext(UserContext);
  const { data: session } = useSession();

  return { mobileMenu, setMobileMenu, ctx, session, userCtx };
};
