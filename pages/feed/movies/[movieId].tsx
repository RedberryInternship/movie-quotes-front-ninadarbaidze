import { FeedWrapper, MovieDetails } from 'components';
import { useMovieDetail } from 'hooks/useMovieDetail';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Data } from 'types';

const MovieId = ({ data }: Data) => {
  useMovieDetail();

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
    quotes: res.movie.quotes,
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
