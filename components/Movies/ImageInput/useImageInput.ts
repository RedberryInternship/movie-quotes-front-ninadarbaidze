import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import { useTranslation } from 'next-i18next';
import { FieldProps } from 'formik';

export const useImageInput = (props: { form: FieldProps }) => {
  const { form } = props;
  const [imagePreview, setImagePreview] = useState<string | Blob>();
  const { t } = useTranslation();
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      form.setFieldValue('image', acceptedFiles[0]);
      setImagePreview(acceptedFiles[0] as File);
      Object.assign(acceptedFiles[0], {
        preview: URL.createObjectURL(acceptedFiles[0]),
      });
    },
    [form]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });
  return { imagePreview, getRootProps, getInputProps, t };
};
