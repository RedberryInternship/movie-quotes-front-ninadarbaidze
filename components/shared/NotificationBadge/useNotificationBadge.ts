import { useContext } from 'react';
import { QuoteContext } from 'store';

export const useNotificationBadge = () => {
  const quoteCtx = useContext(QuoteContext);
  return { quoteCtx };
};
