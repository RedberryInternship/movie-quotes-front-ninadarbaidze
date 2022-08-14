import React, { useContext } from 'react';
import {
  FeedButton,
  SingleImage,
  FeedBackdrop,
  AddMovieModal,
} from 'components';
import Image from 'next/image';
import { MovieContext } from 'store';

const ListOfMovies = () => {
  const movieCtx = useContext(MovieContext);
  console.log(movieCtx.movieCreationModal);
  const foo = () => {
    movieCtx.MovieCreationStateHandler();
  };
  console.log(movieCtx.movieCreationModal);
  return (
    <>
      <header className='flex justify-between'>
        <h1 className='text-white text-2xl'>My list of movies (Total {})</h1>
        <FeedButton text={'Add movie'} onClick={foo} />
      </header>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto mt-12'>
        <SingleImage />
        <SingleImage />
        <SingleImage />
      </div>
    </>
  );
};

export default ListOfMovies;
