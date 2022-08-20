import { ChevronDownIcon } from '@heroicons/react/solid';
import { MovieIcon } from 'components/icons';
import { MovieTypes } from 'components/Movies/ListOfMovies/types';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { getMovies } from 'services';
import { AuthContext } from 'store';
import { DropdownList } from 'components';
import { FieldProps } from 'formik';

const CustomDropdown: React.FC<FieldProps> = ({ form }) => {
  const { data: session } = useSession();
  const ctx = useContext(AuthContext);
  const router = useRouter();
  const [data, setData] = useState([]);
  const [openList, setOpenList] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState('');

  useEffect(() => {
    const getData = async () => {
      let currentLan = router.locale;
      let token = session ? session.accessToken : ctx.token;

      try {
        const response = await getMovies(token as string);
        const newData = response.data.map((movies: MovieTypes) => {
          return {
            id: movies._id,
            movieName: movies[currentLan!].movieName,
            image: movies.image,
          };
        });
        setData(newData as any);
      } catch (err: any) {}
    };
    getData();
  }, [ctx.token, router.locale, session]);

  const dropDownHandler = (id: any) => {
    form.setFieldValue('movieId', id);
    setSelectedMovie(id);
    setOpenList((prev) => !prev);
  };

  return (
    <>
      <div
        className='flex justify-between w-full h-16 mt-4 pl-3 bg-black rounded-[4px]'
        onClick={() => setOpenList(!openList)}
      >
        <div className='flex justify-center items-center gap-3'>
          <div className='mb-2'>
            <MovieIcon />
          </div>
          <h1 className='text-white text-base'>Choose movie</h1>
        </div>
        <ChevronDownIcon className='text-white w-6 mr-3 ' />
      </div>
      {openList && (
        <div className='flex justify-between w-full mb-4 h-48 overflow-scroll pl-3 bg-black rounded-[4px]'>
          <ul className='text-white w-full'>
            {data.length === 0 ? (
              <h1>No movies yet</h1>
            ) : (
              data.map((movie: { id: string }) => (
                <DropdownList
                  key={movie.id}
                  {...movie}
                  selectedMovie={selectedMovie}
                  onClick={() => dropDownHandler(movie.id)}
                />
              ))
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default CustomDropdown;
