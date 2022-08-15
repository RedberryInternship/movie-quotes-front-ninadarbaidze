import { useContext, useEffect } from 'react';
import type { GetStaticProps } from 'next';
import {
  FeedWrapper,
  AddMovieModal,
  FeedBackdrop,
  ListOfMovies,
} from 'components';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { AuthContext, MovieContext } from 'store';
import { useSession } from 'next-auth/react';

const Movies = () => {
  const router = useRouter();
  const ctx = useContext(AuthContext);
  const movieCtx = useContext(MovieContext);
  const { status } = useSession();

  useEffect(() => {
    if (status === 'unauthenticated' && !ctx.isLoggedIn) {
      router.push('/');
    }
  }, [ctx.isLoggedIn, router, status]);

  return (
    <>
      {movieCtx.movieCreationModal && (
        <>
          <FeedBackdrop onClick={() => movieCtx.movieCreationStateHandler()} />
          <AddMovieModal />
        </>
      )}
      <FeedWrapper>
        <ListOfMovies />
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
