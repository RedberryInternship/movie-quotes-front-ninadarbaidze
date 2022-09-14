import { FeedBackdrop, FeedWrapper, Loader, MovieDetails } from 'components';
import { useMovieDetail } from 'hooks/useMovieDetail';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Data } from 'types';
import Head from 'next/head';

const MovieId = ({ data }: Data) => {
  const { userCtx } = useMovieDetail();

  return (
    <>
      <Head>
        <title>{`${data?.name} - Movie Quotes`}</title>
        <meta name='description' content={data?.description} />
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
          <FeedWrapper className='mr-[10%] mt-10 md:mt-16 lg:mt-10'>
            <MovieDetails data={data} />
          </FeedWrapper>
        </>
      )}
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
    `${process.env.NEXT_PUBLIC_API_URL}/movie/${movieId}`
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
        'quotes',
      ])),
    },
  };
};
