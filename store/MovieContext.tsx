/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useState } from 'react';
import { Children, ContextData, MovieContextTypes } from 'types';

export const MovieContext = createContext({
  movieCreationModal: false,
  MovieCreationStateHandler: () => {},
});

export const MovieContextProvider: React.FC<Children> = (props) => {
  const [movieCreationModal, setMovieCreationModal] = useState(false);

  const MovieCreationStateHandler = () => {
    setMovieCreationModal(!movieCreationModal);
  };

  const contextValue: MovieContextTypes = {
    movieCreationModal: movieCreationModal,
    MovieCreationStateHandler: MovieCreationStateHandler,
  };

  return (
    <MovieContext.Provider value={contextValue}>
      {props.children}
    </MovieContext.Provider>
  );
};
