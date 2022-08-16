import React, { useEffect } from 'react';
import { FeedButton, SingleImage } from 'components';
import { useListOfMovies } from './useListOfMovies';
import { getMovies } from 'services';
import { MovieTypes } from './types';

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
  } = useListOfMovies();

  useEffect(() => {
    let currentLan = router.locale;
    const getData = async () => {
      let token = session ? session.accessToken : ctx.token;
      try {
        const response = await getMovies(token as string);
        const movieNumber = response.data.length;
        const newData = response.data.map((movies: MovieTypes) => {
          return {
            id: movies._id,
            movieName: movies[currentLan!].movieName,
            year: movies.year,
            image: movies.image,
          };
        });
        setMovieSum(movieNumber);
        setData(newData);
      } catch (err: any) {}
    };
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
        <FeedButton text={t('movies:addbtn')} onClick={openMovieForm} />
      </header>
      {data.length === 0 ? (
        <h2 className='w-[60%] text-center absolute top-[20vh] left-[50%]  translate-x-[-50%] text-gray20 text-2xl'>
          {t('movies:zeroMovie')}
        </h2>
      ) : (
        <div className='grid justify-center sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto mt-12 px-[5%] md:px-0'>
          {data.map((movie: { id: string }) => (
            <SingleImage key={movie.id} {...movie} />
          ))}
        </div>
      )}
    </>
  );
};

export default ListOfMovies;
