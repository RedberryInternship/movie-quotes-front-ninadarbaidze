import { useState } from 'react';
import { useRouter } from 'next/router';

export const useQuoteItem = (props: {
  image: string;
  quoteEN: string;
  quoteGE: string;
}) => {
  const { image, quoteEN, quoteGE } = props;
  const [quoteHandler, setQuoteHandler] = useState(false);
  const router = useRouter();
  const quote = router.locale === 'ge' ? quoteGE : quoteEN;
  const myLoader = () => {
    return `${process.env.NEXT_PUBLIC_API_URL}/${image}`;
  };
  return { myLoader, quoteHandler, setQuoteHandler, quote };
};
