import { useTranslation } from 'next-i18next';
import { useContext, useState } from 'react';
import { QuoteContext } from 'store';

export const useViewQuote = (props: {
  setViewQuote: (arg0: boolean) => void;
}) => {
  const { setViewQuote } = props;
  const quoteCtx = useContext(QuoteContext);
  const quoteData = quoteCtx.quoteState;
  const [deleteModal, setDeleteModal] = useState(false);
  const { t } = useTranslation();

  const deleteQuoteHandler = () => {
    setDeleteModal(true);
  };

  const editQuoteHandler = () => {
    quoteCtx.editQuoteHandler(true);
    setViewQuote(false);
  };

  const myLoader = () => {
    return `${process.env.NEXT_PUBLIC_API_URL}/${quoteCtx.quoteState.image}`;
  };
  return {
    t,
    myLoader,
    quoteData,
    deleteModal,
    setDeleteModal,
    deleteQuoteHandler,
    quoteCtx,
    editQuoteHandler,
  };
};
