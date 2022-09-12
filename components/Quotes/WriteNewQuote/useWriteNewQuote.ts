import { useTranslation } from 'next-i18next';
import { useContext, useRef, useState } from 'react';
import { QuoteContext } from 'store';

export const useWriteNewQuote = (props: {
  setSearchQuery: (arg0: string) => void;
}) => {
  const { setSearchQuery } = props;
  const quoteCtx = useContext(QuoteContext);
  const { t } = useTranslation();
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout>>();

  const query = useRef() as React.MutableRefObject<HTMLInputElement>;

  const submitHandler = () => {
    clearTimeout(timer);

    const newTimer: ReturnType<typeof setTimeout> = setTimeout(() => {
      query.current.value.includes('@') || query.current.value.includes('#')
        ? setSearchQuery(query.current.value)
        : setSearchQuery('');
    }, 1500);
    setTimer(newTimer);
  };

  const submitOnEnter = () => {
    query.current.value.includes('@') || query.current.value.includes('#')
      ? setSearchQuery(query.current.value)
      : setSearchQuery('');
  };

  return {
    t,
    quoteCtx,
    searchExpanded,
    setSearchExpanded,
    timer,
    setTimer,
    submitHandler,
    query,
    submitOnEnter,
  };
};
