import { FeedButton, SingleImage, Search } from 'components';
import { useListOfMovies } from './useListOfMovies';

const ListOfMovies = () => {
  const { t, data, movieSum, openMovieForm, searchQuery, onChange } =
    useListOfMovies();

  return (
    <>
      <header className='flex justify-between px-[5%] md:px-0'>
        <h1 className='text-white text-xl sm:text-2xl font-helvetica_ge font-thin'>
          {t('movies:heading')} ({t('movies:total')} {movieSum})
        </h1>
        <div className='flex justify-end gap-5 w-92'>
          <div className='items-center w-32 hidden sm:flex focus-within:w-52 focus-within:border-b-[0.5px] focus-within:border-gray20 transition-all duration-500 ease-in-out'>
            <Search />
            <input
              type='text'
              value={searchQuery}
              placeholder='search'
              onChange={onChange}
              className='bg-transparent w-full pl-4 text-white appearance-none outline-none'
            />
          </div>
          <FeedButton
            text={t('movies:addbtn')}
            onClick={openMovieForm}
            className='w-32'
          />
        </div>
      </header>
      {data.length === 0 ? (
        <h2 className='w-[60%] text-center absolute top-[20vh] left-[50%]  translate-x-[-50%] text-gray20 text-2xl'>
          {t('movies:zeroMovie')}
        </h2>
      ) : (
        <div className='grid justify-center sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto mt-12 px-[5%] md:px-0'>
          {data
            .map((movie: { id: string }) => (
              <SingleImage key={movie.id} {...movie} />
            ))
            .filter(
              (movie) =>
                movie.props.movieName.includes(searchQuery) ||
                movie.props.movieName.toLowerCase().includes(searchQuery)
            )}
        </div>
      )}
    </>
  );
};

export default ListOfMovies;
