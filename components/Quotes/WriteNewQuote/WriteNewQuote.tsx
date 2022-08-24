import { CreateIcon, Search } from 'components/icons';
import { useWriteNewQuote } from './useWriteNewQuote';

const WriteNewQuote = () => {
  const { quoteCtx, searchExpanded, setSearchExpanded } = useWriteNewQuote();

  return (
    <>
      <div
        className='relative w-full h-full'
        onClick={() => quoteCtx.quoteCreationStateHandler()}
      >
        <input
          type='text'
          className='bg-gray50 w-full h-full rounded-[10px] placeholder:text-white text-white text-base pl-12'
          placeholder='Write new quote'
        />
        <CreateIcon />
      </div>
      <div className='flex w-1/5 focus-within:w-[180%] focus-within:border-b-[0.5px] focus-within:border-gray20 transition-all duration-500 ease-in-out'>
        <Search />
        <input
          type='text'
          placeholder={
            searchExpanded
              ? 'Enter @ to search movies, Enter # to search quotes '
              : 'Search by'
          }
          className=' bg-transparent w-full pl-4 pb-2 text-white appearance-none outline-none'
          onClick={() => setSearchExpanded(true)}
          onBlur={() => setSearchExpanded(false)}
        />
      </div>
    </>
  );
};

export default WriteNewQuote;
