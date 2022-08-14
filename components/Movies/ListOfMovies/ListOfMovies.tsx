import React, { useContext, useEffect, useState } from 'react';
import { FeedButton, SingleImage } from 'components';
import { MovieContext, AuthContext } from 'store';
import { getMovies } from 'services';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const ListOfMovies = () => {
  const movieCtx = useContext(MovieContext);
  const ctx = useContext(AuthContext);
  const [data, setData] = useState<any>([]);
  const [movieSum, setMovieSum] = useState<number>(0);
  const router = useRouter();
  const { data: session } = useSession();

  const openMovieForm = () => {
    movieCtx.movieCreationStateHandler();
  };

  useEffect(() => {
    const getData = async (lan: any) => {
      let token = session ? session.accessToken : ctx.token;
      try {
        const response = await getMovies(token as string);
        const movieNumber = response.data.length;
        const newData = response.data.map((movies) => {
          return {
            id: movies._id,
            movieName: movies[lan].movieName,
            year: movies.year,
            image: movies.image,
          };
        });
        setMovieSum(movieNumber);
        setData(newData);
      } catch (err: any) {}
    };
    const currentLan = router.locale;
    getData(currentLan);
  }, [ctx.token, ctx.userId, router.locale, session, movieCtx.movieAdded]);

  console.log(movieSum);

  return (
    <>
      <header className='flex justify-between'>
        <h1 className='text-white text-2xl'>
          My list of movies (Total {movieSum})
        </h1>
        <FeedButton text={'Add movie'} onClick={openMovieForm} />
      </header>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto mt-12'>
        {data.map((movie) => (
          <SingleImage key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
};

export default ListOfMovies;
