import { useContext, useState } from 'react';
import { QuoteContext } from 'store';

export const useQuoteList = () => {
  const quoteCtx = useContext(QuoteContext);
  const [viewQuote, setViewQuote] = useState(false);

  const addQuoteModalHandler = () => {
    quoteCtx.quoteCreationStateHandler();
    quoteCtx.movieQuoteCreationHandler();
  };
  const closeQuoteModalHandler = () => {
    quoteCtx.quoteCreationStateHandler();
    quoteCtx.movieQuoteCreationHandler();
  };

  return {
    quoteCtx,
    viewQuote,
    setViewQuote,
    addQuoteModalHandler,
    closeQuoteModalHandler,
  };
};
