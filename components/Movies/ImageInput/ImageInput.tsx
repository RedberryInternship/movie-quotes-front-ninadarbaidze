import { FieldProps } from 'formik';
import { UploadImgIcon } from 'components';
import Image from 'next/image';
import { useImageInput } from './useImageInput';

const ImageInput = ({ form }: any & FieldProps) => {
  const { imagePreview, getRootProps, getInputProps, t } = useImageInput({
    form,
  });

  return (
    <>
      <div
        className='flex items-center gap-2 w-full h-16 mt-2 pl-3 border-gray20 border-[1px] rounded-[4px]'
        {...getRootProps()}
      >
        <input type='file' accept='image/*' {...getInputProps()} />
        <UploadImgIcon />
        <p className='text-white text-base truncate'>{t('movies:drag')}</p>
        <button className='bg-purple text-white text-base px-3 py-1'>
          {t('movies:chooseFile')}
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
