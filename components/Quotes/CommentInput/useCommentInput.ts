import { useFormik } from 'formik';
import { useSession } from 'next-auth/react';
import { useContext } from 'react';
import { commentPost } from 'services';
import { AuthContext } from 'store';

export const useCommentInput = (props) => {
  const { quoteId } = props;
  const { data: session } = useSession();
  const ctx = useContext(AuthContext);
  const onSubmit = async (values, { resetForm }) => {
    try {
      let token = session ? session.accessToken : ctx.token;
      const userId: string | Blob | unknown = session
        ? session.userId
        : ctx.userId;
      const data = {
        comment: values.comment,
        userId: userId,
        quoteId: quoteId,
      };
      resetForm({ values: '' });
      await commentPost(data, token);
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

  return { formik };
};
