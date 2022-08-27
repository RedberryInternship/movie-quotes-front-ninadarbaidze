import { FormikState, useFormik } from 'formik';
import { useSession } from 'next-auth/react';
import { useContext } from 'react';
import { commentPost } from 'services';
import { AuthContext, UserContext } from 'store';
import { CommentRequest } from 'types';
import { InputTypes } from './types';

export const useCommentInput = (props: { quoteId: string }) => {
  const { quoteId } = props;
  const { data: session } = useSession();
  const userCtx = useContext(UserContext);
  const ctx = useContext(AuthContext);

  const onSubmit = async (
    values: InputTypes,
    actions: {
      resetForm: (
        nextState?: Partial<FormikState<InputTypes>> | undefined
      ) => void;
    }
  ) => {
    try {
      let token: string | Blob | unknown = session
        ? session.accessToken
        : ctx.token;
      const userId: string | Blob | unknown = session
        ? session.userId
        : ctx.userId;
      const data: CommentRequest = {
        comment: values.comment,
        userId: userId as string,
        quoteId: quoteId,
      };
      actions.resetForm();
      await commentPost(data, token as string);
    } catch (error: any) {
      throw new Error('Request failed!');
    }
  };

  const formik = useFormik({
    initialValues: {
      comment: '',
    },
    onSubmit: onSubmit,
  });

  // const myLoader = () => {
  //   return `${process.env.NEXT_PUBLIC_API_URL}/${userCtx.userState.profileImage}`;
  // };

  const myLoader = () => {
    const defaultProfileImg = `/assets/images/profile.png`;
    if (session?.user && !userCtx.userState.profileImage) {
      return session!.user.image as string;
    } else if (userCtx.userState.profileImage) {
      return `${process.env.NEXT_PUBLIC_API_URL}/${userCtx.userState.profileImage}`;
    } else {
      return defaultProfileImg;
    }
  };

  return { formik, userCtx, myLoader };
};
