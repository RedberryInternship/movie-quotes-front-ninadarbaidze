import { useTranslation } from 'next-i18next';
import { useContext, useState } from 'react';
import { QuoteContext } from 'store';

export const useQuoteList = () => {
  const quoteCtx = useContext(QuoteContext);
  const [viewQuote, setViewQuote] = useState(false);
  const { t } = useTranslation();

  const addQuoteModalHandler = () => {
    quoteCtx.quoteCreationStateHandler(true);
    quoteCtx.movieQuoteCreationHandler(true);
  };
  const closeQuoteModalHandler = () => {
    quoteCtx.quoteCreationStateHandler(false);
    quoteCtx.movieQuoteCreationHandler(false);
  };

  return {
    t,
    quoteCtx,
    viewQuote,
    setViewQuote,
    addQuoteModalHandler,
    closeQuoteModalHandler,
  };
};
