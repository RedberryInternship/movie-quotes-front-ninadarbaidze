import React, { useContext, useEffect, useState } from 'react';
import { FeedButton, SingleImage } from 'components';
import { MovieContext, AuthContext } from 'store';
import { getMovies } from 'services';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const ListOfMovies = () => {
  const movieCtx = useContext(MovieContext);
  const {t} = useTranslation()
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

  return (
    <>
      <header className='flex justify-between px-[5%] md:px-0'>
        <h1 className='text-white text-xl sm:text-2xl font-helvetica_ge font-thin'>
         {t('movies:heading')} ({t('movies:total')} {movieSum})
        </h1>
        <FeedButton text={t('movies:addbtn')} onClick={openMovieForm} />
      </header>
      <div className='grid justify-center sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto mt-12 px-[5%] md:px-0'>
        {data.map((movie) => (
          <SingleImage key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
};

export default ListOfMovies;
