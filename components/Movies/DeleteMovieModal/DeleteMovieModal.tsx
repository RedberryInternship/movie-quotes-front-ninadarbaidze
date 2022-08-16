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
        <div className='flex flex-col justify-around gap-6'>
          <h1 className='text-2xl text-white'>Are you sure?</h1>
          <div className='flex gap-4'>
            <button
              className='w-16 h-8 bg-red text-base rounded-2xl text-white cursor-pointer'
              onClick={onDelete}
            >
              Yes
            </button>
            <button
              className='w-16 h-8 bg-green text-base rounded-2xl text-white cursor-pointer'
              onClick={onCancel}
            >
              No
            </button>
          </div>
        </div>
      </FeedModal>
    </>
  );
};

export default DeleteMovieModal;
