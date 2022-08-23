/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useReducer, useState } from 'react';
import { Children, QuoteContextTypes } from 'types';

export const QuoteContext = createContext({
  quoteCreationModal: false,
  quoteCreationStateHandler: () => {},
  isMovieQuote: false,
  movieQuoteCreationHandler: () => {},
});

export const QuoteContextProvider: React.FC<Children> = (props) => {
  const [quoteCreationModal, setQuoteCreationModal] = useState(false);
  const [isMovieQuote, setIsMovieQuote] = useState(false);

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
  };

  return (
    <QuoteContext.Provider value={contextValue}>
      {props.children}
    </QuoteContext.Provider>
  );
};
