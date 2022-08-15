import { FeedWrapper, MovieDetails } from 'components';
import { useSession } from 'next-auth/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
import { AuthContext, MovieContext } from 'store';

const MovieId = ({ data }: any) => {
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
      <FeedWrapper>
        <MovieDetails />
      </FeedWrapper>
    </>
  );
};

export default MovieId;

export async function getStaticProps(context) {
  const movieId = context.params.movieId;

  const response = await fetch(`http://localhost:3001/movies/${movieId}`);
  const res = await response.json();
  return {
    props: {
      data: res,
      ...(await serverSideTranslations(context.locale!, [
        'profile',
        'home',
        'genres',
        'movies',
      ])),
    },
  };
}

export async function getStaticPaths() {
  const response = await fetch(`http://localhost:3001/movies`);
  const res = await response.json();
  console.log(res);

  const paths = res.map((response: { _id: any }) => ({
    params: { movieId: response._id },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}
