/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useReducer, useState } from 'react';
import { Children, MovieContextTypes, MovieStateTypes } from 'types';

const initialState = {
  en: {
    movieName: '',
    director: '',
    description: '',
  },
  ge: {
    movieName: '',
    director: '',
    description: '',
  },
  budget: 0,
  year: 0,
  genres: '',
  userId: '',
  image: '',
};
const reducer = (
  state: MovieStateTypes | any,
  action: { type: string; payload: MovieStateTypes }
) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        ...action.payload,
      };
  }
};

export const MovieContext = createContext({
  movieCreationModal: false,
  movieCreationStateHandler: () => {},
  movieAdded: false,
  getMoviesRefresh: () => {},
  isMovieEdited: false,
  movieEditingStateHandler: (value: boolean) => {},
  movieState: initialState,
  getMovie: (data: MovieStateTypes) => {},
});

export const MovieContextProvider: React.FC<Children> = (props) => {
  const [movieCreationModal, setMovieCreationModal] = useState(false);
  const [movieAdded, setMovieAdded] = useState<boolean>(false);
  const [isMovieEdited, setIsMovieEdited] = useState(false);

  const [movieState, dispatchMovieAction] = useReducer(reducer, initialState);

  const getMovie = (data: MovieStateTypes) => {
    dispatchMovieAction({
      type: 'ADD',
      payload: data,
    });
  };

  const movieCreationStateHandler = () => {
    setMovieCreationModal(!movieCreationModal);
  };

  const getMoviesRefresh = () => {
    setMovieAdded(!movieAdded);
  };

  const movieEditingStateHandler = (value: boolean) => {
    setIsMovieEdited(value);
  };

  const contextValue: MovieContextTypes = {
    movieCreationModal,
    movieCreationStateHandler,
    movieAdded,
    getMoviesRefresh,
    isMovieEdited,
    movieEditingStateHandler,
    movieState,
    getMovie,
  };

  return (
    <MovieContext.Provider value={contextValue}>
      {props.children}
    </MovieContext.Provider>
  );
};
