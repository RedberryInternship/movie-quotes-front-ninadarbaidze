import { FeedBackdrop, FeedModal } from 'components/shared';
import React from 'react';
import { DeleteModalTypes } from './types';
import { useDeleteMovieModal } from './useDeleteMovieModal';

const DeleteMovieModal: React.FC<DeleteModalTypes> = (props) => {
  const { onDelete, onCancel, closeModal } = props;
  const { t } = useDeleteMovieModal();

  return (
    <>
      <FeedBackdrop onClick={() => closeModal(false)} />
      <FeedModal className='px-[8%] py-[3%]'>
        <div className='flex flex-col items-center font-thin justify-around gap-6'>
          <h1 className='text-lg md:text-2xl text-white text-center'>
            {t('movies:sure')}
          </h1>
          <div className='flex gap-4'>
            <button
              className='w-16 h-8 bg-red text-base rounded-2xl text-white cursor-pointer'
              onClick={onDelete}
            >
              {t('movies:yes')}
            </button>
            <button
              className='w-16 h-8 bg-green text-base rounded-2xl text-white cursor-pointer'
              onClick={onCancel}
            >
              {t('movies:no')}
            </button>
          </div>
        </div>
      </FeedModal>
    </>
  );
};

export default DeleteMovieModal;
