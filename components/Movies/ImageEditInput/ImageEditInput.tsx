import { FieldProps } from 'formik';
import { UploadImgIcon } from 'components';
import Image from 'next/image';

import { useImageEditInput } from './useImageEditInput';

const ImageEditInput: React.FC<FieldProps> = ({ form }) => {
  const { getRootProps, getInputProps, imageStateHandler, t, myLoader } =
    useImageEditInput({ form } as FieldProps);

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
              {t('movies:changeImg')}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageEditInput;
