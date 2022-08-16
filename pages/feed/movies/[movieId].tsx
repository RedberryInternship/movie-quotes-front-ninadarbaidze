import { FeedWrapper, MovieDetails } from 'components';
import { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from 'store';

const MovieId = ({ data }: any) => {
  const router = useRouter();
  const ctx = useContext(AuthContext);
  const { status } = useSession();
  console.log(data);

  useEffect(() => {
    if (status === 'unauthenticated' && !ctx.isLoggedIn) {
      router.push('/');
    }
  }, [ctx.isLoggedIn, router, status]);

  return (
    <>
      <FeedWrapper>
        <MovieDetails data={data} />
      </FeedWrapper>
    </>
  );
};

export default MovieId;

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  params,
}) => {
  const movieId = params!.movieId;
  const currLan = locale!;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/movies/${movieId}`
  );
  const res = await response.json();
  const data = {
    budget: res.movie.budget,
    year: res.movie.year,
    name: res.movie[currLan].movieName,
    director: res.movie[currLan].director,
    description: res.movie[currLan].director,
    genres: res.movie.genres,
    image: res.movie.image,
  };
  return {
    props: {
      data: data,
      ...(await serverSideTranslations(locale!, [
        'profile',
        'home',
        'genres',
        'movies',
      ])),
    },
  };
};
