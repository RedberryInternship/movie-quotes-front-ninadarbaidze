import { useContext, useState } from 'react';
import { QuoteContext } from 'store';

export const useWriteNewQuote = () => {
  const quoteCtx = useContext(QuoteContext);
  const [searchExpanded, setSearchExpanded] = useState(false);
  return { quoteCtx, searchExpanded, setSearchExpanded };
};
