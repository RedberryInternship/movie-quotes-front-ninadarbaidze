import React, { useCallback, useContext, useState } from 'react';
import { FieldProps } from 'formik';
import { useDropzone } from 'react-dropzone';
import { UploadImgIcon } from 'components';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { MovieContext } from 'store';

const ImageEditInput = ({ form }: any & FieldProps) => {
  const [imagePreview, setImagePreview] = useState<string | any>();
  const { t } = useTranslation();
  const movieCtx = useContext(MovieContext);
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

  const myLoader = () => {
    return `${process.env.NEXT_PUBLIC_API_URL}/${movieCtx.movieState.image}`;
  };

  const imageStateHandler = () => {
    if (imagePreview) {
      return imagePreview.preview;
    } else {
      return `${process.env.NEXT_PUBLIC_API_URL}/${movieCtx.movieState.image}`;
    }
  };

  return (
    <>
      <div
        className='flex flex-col items-center gap-2 w-full h-full mt-2   rounded-[4px]'
        {...getRootProps()}
      >
        <input type='file' accept='image/*' {...getInputProps()} />
        <div className='flex overflow-clip w-full relative rounded-[10px] object-cover'>
          <Image
            loader={myLoader}
            src={imageStateHandler()}
            alt='imagePreview'
            objectFit='cover'
            width={'800px'}
            height={'500px'}
          />
          <div className='flex justify-center items-center cursor-pointer'>
            <div className='bg-background w-36 h-24 mt-4 rounded-xl opacity-80 absoluteStyle'></div>
            <UploadImgIcon className=' absoluteStyle' />
            <h3 className='absoluteStyle mt-9 font-helvetica_ge font-thin text-base text-white'>
              Change photo
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageEditInput;
