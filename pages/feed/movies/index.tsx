import type { GetStaticProps } from 'next';
import {
  FeedWrapper,
  AddMovieModal,
  FeedBackdrop,
  ListOfMovies,
} from 'components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { useMovies } from 'hooks';

const Movies = () => {
  const { movieCtx } = useMovies();

  return (
    <>
      {movieCtx.movieCreationModal && (
        <>
          <FeedBackdrop onClick={() => movieCtx.movieCreationStateHandler()} />
          <AddMovieModal />
        </>
      )}
      <FeedWrapper>
        <div className='relative'>
          <ListOfMovies />
        </div>
      </FeedWrapper>
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
      ])),
    },
  };
};
