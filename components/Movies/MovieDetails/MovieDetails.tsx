import Image from 'next/image';
import {
  DeleteMovieModal,
  Trash,
  EditBtn,
  AddMovieModal,
  FeedBackdrop,
} from 'components';

import { useMovieDetails } from './useMovieDetails';
import { Data } from 'types';

const MovieDetails: React.FC<Data> = ({ data }) => {
  const {
    t,
    genresArray,
    openDeleteModal,
    myLoader,
    cancelDeleteHandler,
    editMovieHandler,
    movieCtx,
    deleteMovieHandler,
    setOpenDeleteModal,
  } = useMovieDetails({ data });

  return (
    <>
      {openDeleteModal && (
        <DeleteMovieModal
          onCancel={cancelDeleteHandler}
          onDelete={deleteMovieHandler}
          closeModal={setOpenDeleteModal}
        />
      )}
      {movieCtx.isMovieEdited && (
        <>
          <FeedBackdrop
            onClick={() => movieCtx.movieEditingStateHandler(false)}
          />
          <AddMovieModal />
        </>
      )}

      <div className=''>
        <h1 className='text-white text-xl px-[5%] md:px-0 sm:text-2xl hidden sm:block font-helvetica_ge font-thin'>
          {t('movies:descriptionH1')}
        </h1>
        <div className='flex flex-col md:flex-row px-[5%] md:px-0 gap-4 mt-12'>
          <div className='w-full md:w-3/5 h-[23rem] rounded-xl overflow-clip'>
            <Image
              loader={myLoader}
              src={`${process.env.NEXT_PUBLIC_API_URL}/${data.image}`}
              objectFit='cover'
              layout='responsive'
              width={600}
              height={600}
              alt='movie'
            />
          </div>
          <div className='w-full md:w-2/5 flex flex-col relative gap-4'>
            <div className='flex absolute right-0 justify-around  w-1/3 md:w-32 py-2 px-4 rounded-[10px] bg-gray50'>
              <EditBtn onClick={editMovieHandler} />
              <div className='bg-gray w-[1px] h-4' />
              <Trash onClick={() => setOpenDeleteModal(true)} />
            </div>
            <h2 className='text-beidge text-2xl w-2/3 md:w-none'>
              {data.name} ({data.year})
            </h2>
            <ul className='flex gap-1 text-lg text-white'>
              {genresArray.map((genre: string) => (
                <li key={genre} className='bg-gray20 px-2 rounded-[4px]'>
                  {t(`${genre}`)}
                </li>
              ))}
            </ul>
            <div className='flex gap-2'>
              <h3 className='text-gray10 text-lg'>{t('movies:director')}:</h3>
              <span className='text-white text-lg'>{data.director}</span>
            </div>
            <div className='flex gap-2'>
              <h3 className='text-gray10 text-lg'>{t('movies:budget')}:</h3>
              <span className='text-white text-lg'>{data.budget}</span>
            </div>
            <p className='text-gray10 text-lg'>{data.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
