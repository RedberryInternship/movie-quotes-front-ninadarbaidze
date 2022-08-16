import { FeedModal, UserInfo, MovieForm } from 'components';
import { useContext } from 'react';
import { MovieContext } from 'store';
import { useAddMovieModal } from './useAddMovieModal';

const AddMovieModal = () => {
  const { t } = useAddMovieModal();
  const movieCtx = useContext(MovieContext);

  return (
    <>
      <FeedModal className='px-[2%] w-[90%] md:w-[50%]'>
        <div className='flex items-center justify-center h-14 mb-2 border-b-[1px] border-gray15 border-opacity-20'>
          <h1 className='text-md text-white'>
            {movieCtx.isMovieEdited
              ? t('movies:editMovie')
              : t('movies:addMovie')}
          </h1>
        </div>
        {!movieCtx.isMovieEdited ? (
          <div className='ml-0'>
            <UserInfo className='px-1 mt-[1px] py-2' />
          </div>
        ) : (
          <div className='mt-12' />
        )}

        <MovieForm />
      </FeedModal>
    </>
  );
};

export default AddMovieModal;
