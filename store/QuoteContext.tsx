/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useReducer, useState } from 'react';
import { Children, QuoteContextTypes, QuoteStateTypes } from 'types';

const initialState = {
  quoteEN: '',
  quoteGE: '',
  image: '',
  movieId: '',
  userId: '',
};
const reducer = (
  state: QuoteStateTypes | any,
  action: { type: string; payload: QuoteStateTypes }
) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        ...action.payload,
      };
  }
};

export const QuoteContext = createContext({
  quoteCreationModal: false,
  quoteCreationStateHandler: () => {},
  isMovieQuote: false,
  movieQuoteCreationHandler: () => {},
  quoteState: initialState,
  getQuote: (data: QuoteStateTypes) => {},
});

export const QuoteContextProvider: React.FC<Children> = (props) => {
  const [quoteCreationModal, setQuoteCreationModal] = useState(false);
  const [isMovieQuote, setIsMovieQuote] = useState(false);
  const [refreshQuotes, setRefreshQuotes] = useState(false);

  const [quoteState, dispatchQuoteAction] = useReducer(reducer, initialState);

  const getQuote = (data: QuoteStateTypes) => {
    dispatchQuoteAction({
      type: 'ADD',
      payload: data,
    });
  };

  const quoteCreationStateHandler = () => {
    setQuoteCreationModal(!quoteCreationModal);
  };

  const movieQuoteCreationHandler = () => {
    setIsMovieQuote(!isMovieQuote);
  };

  const contextValue: QuoteContextTypes = {
    quoteCreationStateHandler,
    quoteCreationModal,
    isMovieQuote,
    movieQuoteCreationHandler,
    quoteState,
    getQuote,
  };

  return (
    <QuoteContext.Provider value={contextValue}>
      {props.children}
    </QuoteContext.Provider>
  );
};
