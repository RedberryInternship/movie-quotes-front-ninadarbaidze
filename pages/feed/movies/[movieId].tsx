import { FeedWrapper, MovieDetails } from 'components';
import { useMovieDetail } from 'hooks';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useEffect } from 'react';
import { Data } from 'types';

const MovieId = ({ data }: Data) => {
  const { router, ctx, status } = useMovieDetail();

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
    description: res.movie[currLan].description,
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
