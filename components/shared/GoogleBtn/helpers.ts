import { signIn } from 'next-auth/react';

export const submitHandler = () => {
  signIn('google');
};
