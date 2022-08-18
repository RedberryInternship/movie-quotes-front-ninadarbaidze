import { SetStateAction, useCallback, useContext, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useTranslation } from 'next-i18next';
import { MovieContext } from 'store';
import { FieldProps } from 'formik';

export const useImageEditInput = (props: { form: FieldProps | any }) => {
  const { form } = props;
  const [imagePreview, setImagePreview] = useState<any>();
  const { t } = useTranslation();
  const movieCtx = useContext(MovieContext);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      form.setFieldValue('image', acceptedFiles[0]);
      setImagePreview(acceptedFiles[0] as unknown as SetStateAction<undefined>);
      Object.assign(acceptedFiles[0], {
        preview: URL.createObjectURL(acceptedFiles[0]),
      });
    },
    [form]
  );

  const imageStateHandler = () => {
    if (imagePreview) {
      return imagePreview.preview;
    } else {
      return `${process.env.NEXT_PUBLIC_API_URL}/${movieCtx.movieState.image}`;
    }
  };

  const myLoader = () => {
    return `${process.env.NEXT_PUBLIC_API_URL}/${movieCtx.movieState.image}`;
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });
  return {
    getRootProps,
    getInputProps,
    imageStateHandler,
    t,
    movieCtx,
    myLoader,
  };
};
