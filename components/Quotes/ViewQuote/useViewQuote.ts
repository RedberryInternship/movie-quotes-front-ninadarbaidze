import { useContext } from 'react';
import { QuoteContext } from 'store';

export const useViewQuote = () => {
  const quoteCtx = useContext(QuoteContext);
  const quoteData = quoteCtx.quoteState;
  const myLoader = () => {
    return `${process.env.NEXT_PUBLIC_API_URL}/${quoteCtx.quoteState.image}`;
  };
  return { myLoader, quoteData };
};
