import { signIn } from 'next-auth/react';

export const submitHandler = () => {
  signIn('google', { callbackUrl: `${process.env.NEXT_PUBLIC_API_URL}/feed` });
};
