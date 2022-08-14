import React from 'react';
import { FeedModal, UserInfo, MovieForm } from 'components';
import { useTranslation } from 'next-i18next';

const AddMovieModal = () => {
  const {t} = useTranslation()
  return (
    <>
      <FeedModal className='px-[2%] w-[90%] md:w-[50%]'>
        <div className='flex items-center justify-center h-14 mb-2 border-b-[1px] border-gray15 border-opacity-20'>
          <h1 className='text-md text-white'>{t('movies:addMovie')}</h1>
        </div>
        <div className='ml-0'>
          <UserInfo className='px-1 mt-[1px] py-2' />
        </div>
        <MovieForm />
      </FeedModal>
    </>
  );
};

export default AddMovieModal;
