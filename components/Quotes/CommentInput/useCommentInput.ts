import { useFormik } from 'formik';

export const useCommentInput = () => {
  const onSubmit = async (values) => {
    try {
      console.log(values);
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
