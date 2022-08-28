import { CreateIcon, Search } from 'components/icons';
import { useWriteNewQuote } from './useWriteNewQuote';

const WriteNewQuote = (props: { setSearchQuery: (arg0: string) => void }) => {
  const { setSearchQuery } = props;
  const {
    t,
    quoteCtx,
    searchExpanded,
    setSearchExpanded,
    submitHandler,
    query,
  } = useWriteNewQuote({
    setSearchQuery,
  });

  return (
    <>
      <div
        className='relative w-full h-full'
        onClick={() => quoteCtx.quoteCreationStateHandler()}
      >
        <input
          type='text'
          className='bg-gray50 w-full h-full rounded-[10px] placeholder:text-white text-white text-base pl-12 truncate'
          placeholder={t('quotes:newPost')}
        />
        <CreateIcon />
      </div>
      <div className='flex w-[25%] focus-within:w-[180%] focus-within:border-b-[0.5px] focus-within:border-gray20 transition-all duration-500 ease-in-out'>
        <Search />
        <input
          type='text'
          placeholder={
            searchExpanded
              ? `${t('quotes:searchLong')}`
              : `${t('quotes:search2')}`
          }
          className='text-sm bg-transparent w-full pl-4 pb-2 text-white appearance-none outline-none truncate'
          onClick={() => setSearchExpanded(true)}
          onBlur={() => setSearchExpanded(false)}
          onKeyUp={submitHandler}
          ref={query}
        />
      </div>
    </>
  );
};

export default WriteNewQuote;
