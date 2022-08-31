import { useQuotes } from 'hooks';
import type { GetStaticProps } from 'next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Quotes = () => {
  useQuotes();
  return <></>;
};

export default Quotes;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'profile',
        'home',
        'genres',
        'movies',
        'quotes',
      ])),
    },
  };
};
