import React, { useContext, useState } from 'react';
import Image from 'next/image';
import { DeleteMovieModal, Trash } from 'components';
import { useTranslation } from 'next-i18next';
import { useSession } from 'next-auth/react';
import { AuthContext, MovieContext } from 'store';
import { deleteMovie } from 'services';
import { useRouter } from 'next/router';

const MovieDetails: React.FC<any> = ({ data }) => {
  const { t } = useTranslation();
  const { data: session } = useSession();
  const ctx = useContext(AuthContext);
  const router = useRouter();
  let genresArray = data.genres[0].split(',');
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const deleteMovieHandler = async () => {
    const token: string | unknown = session ? session.accessToken : ctx.token;

    try {
      const movieId = { movieId: router.query.movieId };
      setOpenDeleteModal(false);
      await deleteMovie(token as string, movieId);
      router.replace(`/feed/movies`);
    } catch (err: any) {}
  };

  const cancelDeleteHandler = () => {
    setOpenDeleteModal(false);
  };
  return (
    <>
      {openDeleteModal && (
        <DeleteMovieModal
          onCancel={cancelDeleteHandler}
          onDelete={deleteMovieHandler}
          closeModal={setOpenDeleteModal}
        />
      )}

      <div className=''>
        <h1 className='text-white text-xl px-[5%] md:px-0 sm:text-2xl hidden sm:block font-helvetica_ge font-thin'>
          {t('movies:descriptionH1')}
        </h1>
        <div className='flex flex-col md:flex-row px-[5%] md:px-0 gap-4 mt-12'>
          <div className='w-full md:w-3/5 h-[23rem] rounded-xl overflow-clip'>
            <Image
              src='/assets/images/image-1.png'
              className=''
              objectFit='cover'
              layout='responsive'
              width={600}
              height={600}
              alt='movie'
            />
          </div>
          <div className='w-full md:w-2/5 flex flex-col relative gap-4'>
            <div className='flex absolute right-0 justify-around  w-1/3 md:w-32 py-2 px-4 rounded-[10px] bg-gray50'>
              {/* <EditBtn onClick={deleteMovieHandler} /> */}
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
