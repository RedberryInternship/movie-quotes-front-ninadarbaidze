import type { GetStaticProps } from 'next';
import {
  FeedWrapper,
  AddMovieModal,
  FeedBackdrop,
  ListOfMovies,
  Loader,
} from 'components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useMovies } from 'hooks/useMovies';
import Head from 'next/head';

const Movies = () => {
  const { movieCtx, currLang, userCtx } = useMovies();

  return (
    <>
      <Head>
        <title>
          {currLang === 'en'
            ? 'My list of movies - Movie Quotes'
            : 'ჩემი ფილმების სია - Movie Quotes'}
        </title>
        <meta
          name='description'
          content={currLang === 'en' ? 'List of movies' : 'ფილმების სია'}
        />
      </Head>

      {userCtx.loader ? (
        <>
          <Loader className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-50' />
          <FeedBackdrop
            onClick={() => {}}
            className=' bg-mainDark bg-opacity-100'
          />
        </>
      ) : (
        <>
          {movieCtx.movieCreationModal && (
            <>
              <FeedBackdrop
                onClick={() => movieCtx.movieCreationStateHandler()}
                className='backdrop-blur-sm'
              />
              <AddMovieModal />
            </>
          )}
          <FeedWrapper className='lg:mr-[10%]'>
            <div className='relative'>
              <ListOfMovies />
            </div>
          </FeedWrapper>
        </>
      )}
    </>
  );
};

export default Movies;

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
