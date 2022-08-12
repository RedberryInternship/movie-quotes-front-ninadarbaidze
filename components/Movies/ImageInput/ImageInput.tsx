import React, { useCallback } from 'react';
import { FieldProps } from 'formik';
import { useDropzone } from 'react-dropzone';
import { UploadImgIcon } from 'components';

const ImageInput = ({ form }: any & FieldProps) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      console.log(acceptedFiles[0]);
      form.setFieldValue('image', acceptedFiles[0]);
    },
    [form]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  return (
    <>
      <div
        className='flex items-center gap-2 w-full h-16 mt-4  pl-3 border-gray20 border-[1px] rounded-[4px]'
        {...getRootProps()}
      >
        <input type='file' accept='image/*' {...getInputProps()} />
        <UploadImgIcon />
        <p className='text-white text-base'>Drag & drop your image here or</p>
        <button className='bg-purple text-white text-base px-3 py-1'>
          Choose file
        </button>
      </div>
    </>
  );
};

export default ImageInput;
