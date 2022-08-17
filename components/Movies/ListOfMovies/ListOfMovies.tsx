import React, { useEffect } from 'react';
import { FeedButton, SingleImage } from 'components';
import { useListOfMovies } from './useListOfMovies';

const ListOfMovies = () => {
  const {
    movieCtx,
    t,
    ctx,
    data,
    movieSum,
    router,
    openMovieForm,
    setData,
    setMovieSum,
    session,
    getData,
    searchQuery,
    onChange,
  } = useListOfMovies();

  useEffect(() => {
    getData();
  }, [
    ctx.token,
    ctx.userId,
    router.locale,
    movieCtx.movieAdded,
    setMovieSum,
    setData,
    session,
  ]);

  return (
    <>
      <header className='flex justify-between px-[5%] md:px-0'>
        <h1 className='text-white text-xl sm:text-2xl font-helvetica_ge font-thin'>
          {t('movies:heading')} ({t('movies:total')} {movieSum})
        </h1>
        <input type='text' value={searchQuery} onChange={onChange} />
        <FeedButton text={t('movies:addbtn')} onClick={openMovieForm} />
      </header>
      {data.length === 0 ? (
        <h2 className='w-[60%] text-center absolute top-[20vh] left-[50%]  translate-x-[-50%] text-gray20 text-2xl'>
          {t('movies:zeroMovie')}
        </h2>
      ) : (
        <div className='grid justify-center sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto mt-12 px-[5%] md:px-0'>
          {data
            .map((movie: { id: string }) => (
              <SingleImage key={movie.id} {...movie} />
            ))
            .filter(
              (movie) =>
                movie.props.movieName.includes(searchQuery) ||
                movie.props.movieName.toLowerCase().includes(searchQuery)
            )}
        </div>
      )}
    </>
  );
};

export default ListOfMovies;
