import React, { useCallback, useState } from 'react';
import { FieldProps } from 'formik';
import { useDropzone } from 'react-dropzone';
import { UploadImgIcon } from 'components';
import Image from 'next/image';

const ImageInput = ({ form }: any & FieldProps) => {
  const [imagePreview, setImagePreview] = useState<string | any>();
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      form.setFieldValue('image', acceptedFiles[0]);
      setImagePreview(acceptedFiles[0] as any);
      Object.assign(acceptedFiles[0], {
        preview: URL.createObjectURL(acceptedFiles[0]),
      });
    },
    [form]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });

  return (
    <>
      <div
        className='flex items-center gap-2 w-full h-16 mt-2 pl-3 border-gray20 border-[1px] rounded-[4px]'
        {...getRootProps()}
      >
        <input type='file' accept='image/*' {...getInputProps()} />
        <UploadImgIcon />
        <p className='text-white text-base truncate'>
          Drag & drop your image here or
        </p>
        <button className='bg-purple text-white text-base px-3 py-1'>
          Choose file
        </button>
        {imagePreview && (
          <div className='flex items-center border-2 border-red overflow-clip rounded-[10px] ml-8 object-cover'>
            <Image
              src={imagePreview?.preview}
              alt='imagePreview'
              width={'50px'}
              height={'50px'}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ImageInput;
