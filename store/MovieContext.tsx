/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useState } from 'react';
import { Children, ContextData, MovieContextTypes } from 'types';

export const MovieContext = createContext({
  movieCreationModal: false,
  movieCreationStateHandler: () => {},
  movieAdded: false,
  getMoviesRefresh: () => {},
});

export const MovieContextProvider: React.FC<Children> = (props) => {
  const [movieCreationModal, setMovieCreationModal] = useState(false);
  const [movieAdded, setMovieAdded] = useState<boolean>(false);

  const movieCreationStateHandler = () => {
    setMovieCreationModal(!movieCreationModal);
  };

  const getMoviesRefresh = () => {
    setMovieAdded(!movieAdded);
  };

  const contextValue: MovieContextTypes = {
    movieCreationModal: movieCreationModal,
    movieCreationStateHandler: movieCreationStateHandler,
    movieAdded: movieAdded,
    getMoviesRefresh: getMoviesRefresh,
  };

  return (
    <MovieContext.Provider value={contextValue}>
      {props.children}
    </MovieContext.Provider>
  );
};
