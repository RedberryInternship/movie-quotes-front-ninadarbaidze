import { ChevronDownIcon } from '@heroicons/react/solid';
import { MovieIcon } from 'components/icons';
import { DropdownList } from 'components';
import { FieldProps } from 'formik';
import { useCustomDropdown } from './useCustomDropdown';

const CustomDropdown: React.FC<FieldProps> = ({ form }) => {
  const { data, openList, selectedMovie, dropDownHandler, setOpenList } =
    useCustomDropdown({
      form,
    });

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
        <div className='flex justify-between w-full h-48 transition-all visible duration-500 ease-linear overflow-scroll pl-3 bg-black rounded-[4px]'>
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
