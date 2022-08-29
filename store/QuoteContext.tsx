/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useReducer, useState } from 'react';
import { Children, QuoteContextTypes, QuoteStateTypes } from 'types';

const initialState = {
  quoteEN: '',
  quoteGE: '',
  image: '',
  movieId: '',
  userId: '',
  _id: '',
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
  editQuoteModal: false,
  editQuoteHandler: (value: boolean) => {},
  refreshQuotes: false,
  refreshQuotesHandler: () => {},
});

export const QuoteContextProvider: React.FC<Children> = (props) => {
  const [quoteCreationModal, setQuoteCreationModal] = useState(false);
  const [isMovieQuote, setIsMovieQuote] = useState(false);
  const [editQuoteModal, setEditQuoteModal] = useState(false);
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

  const refreshQuotesHandler = () => {
    setRefreshQuotes(!refreshQuotes);
  };

  const editQuoteHandler = (value: boolean) => {
    setEditQuoteModal(value);
  };

  const contextValue: QuoteContextTypes = {
    quoteCreationStateHandler,
    quoteCreationModal,
    isMovieQuote,
    movieQuoteCreationHandler,
    quoteState,
    getQuote,
    editQuoteModal,
    editQuoteHandler,
    refreshQuotes,
    refreshQuotesHandler,
  };

  return (
    <QuoteContext.Provider value={contextValue}>
      {props.children}
    </QuoteContext.Provider>
  );
};
