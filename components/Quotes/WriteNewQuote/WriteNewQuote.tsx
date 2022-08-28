import { CreateIcon, Search } from 'components/icons';
import { useRef, useState } from 'react';
import { useWriteNewQuote } from './useWriteNewQuote';

const WriteNewQuote = (props) => {
  const { setSearchQuery, searchQuery, setTest } = props;
  const { quoteCtx, searchExpanded, setSearchExpanded } = useWriteNewQuote();

  const [timer, setTimer] = useState();

  // const onChange = (event: { target: { value: string } }) => {
  //   setSearchQuery(event.target.value);
  // };

  const query = useRef<any>();

  const submitHandler = () => {
    clearTimeout(timer);
    const newTimer = setTimeout(() => {
      setSearchQuery(query.current.value);
    }, 1500);
    setTimer(newTimer);
  };

  return (
    <>
      <div
        className='relative w-full h-full'
        onClick={() => quoteCtx.quoteCreationStateHandler()}
      >
        <input
          type='text'
          className='bg-gray50 w-full h-full rounded-[10px] placeholder:text-white text-white text-base pl-12 truncate'
          placeholder='Write new quote'
        />
        <CreateIcon />
      </div>
      <div className='flex w-[25%] focus-within:w-[180%] focus-within:border-b-[0.5px] focus-within:border-gray20 transition-all duration-500 ease-in-out'>
        <Search />
        <input
          type='text'
          placeholder={
            searchExpanded
              ? 'Enter @ to search movies, Enter # to search quotes '
              : 'Search by'
          }
          className=' bg-transparent w-full pl-4 pb-2 text-white appearance-none outline-none truncate'
          onClick={() => setSearchExpanded(true)}
          onBlur={() => setSearchExpanded(false)}
          // onChange={onChange}
          onKeyUp={submitHandler}
          // onKeyDown={submitHandler}
          ref={query}
        />
      </div>
    </>
  );
};

export default WriteNewQuote;
