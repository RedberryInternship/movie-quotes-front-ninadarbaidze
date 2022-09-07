import { useQuotes } from 'hooks';
import type { GetStaticProps } from 'next';
import Head from 'next/head';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Quotes = () => {
  const { currLang } = useQuotes();
  return (
    <>
      <Head>
        <title>
          {currLang === 'en'
            ? 'Movie Quotes - Find any quote'
            : 'Movie Quotes - იპოვე ნებისმიერი ციტატა'}
        </title>
        <meta
          name='description'
          content={
            currLang === 'en'
              ? 'Find any quote in millions of movie lines'
              : 'იპოვე ნებისმიერი ციტატა მილიონობით ფილმის სტრიქონში'
          }
        />
      </Head>
    </>
  );
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
