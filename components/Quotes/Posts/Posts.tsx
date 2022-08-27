import Image from 'next/image';
import { Comment, CommentItem, Like, CommentInput } from 'components';
import { usePosts } from './usePosts';
import { Comments, PostTypes } from 'types';

const Posts: React.FC<PostTypes> = (props) => {
  const { quote } = props;
  const {
    commented,
    currentLan,
    myLoader,
    myLoader2,
    likeHandler,
    router,
    liked,
    commentRef,
    handleClick,
  } = usePosts({ quote });

  return (
    <div className='flex flex-col gap-3 w-[65%] mr-[20%] mt-4 h-full bg-mainDark rounded-[12px] px-[2%] '>
      <div className='flex items-center gap-2 pt-[2%]'>
        <div className='object-cover w-10 h-10 rounded-full overflow-clip border-2'>
          <Image
            loader={myLoader}
            src={`${process.env.NEXT_PUBLIC_API_URL}/${quote.userId.profileImage}`}
            alt='profile-icon'
            width={50}
            height={50}
          />
        </div>
        <div>
          <p className='text-white font-base'>{quote.userId.username}</p>
        </div>
      </div>
      <div className='flex gap-2 text-white'>
        <p className='text-white font-base'>
          {router.locale === 'ge' ? quote.quoteGE : quote.quoteEN}
        </p>
        <p>
          movie-
          <span className='text-beidge'>
            {currentLan === 'ge'
              ? quote.movieId.ge.movieName
              : quote.movieId.en.movieName}
            .
          </span>
          <span>({quote.movieId.year})</span>
        </p>
      </div>
      <div className='flex overflow-clip w-full relative rounded-[10px] object-cover'>
        <Image
          loader={myLoader2}
          src={`${process.env.NEXT_PUBLIC_API_URL}/${quote.image}`}
          alt='imagePreview'
          objectFit='cover'
          width={'800px'}
          height={'500px'}
        />
      </div>
      <div className='flex items-center gap-4 text-white'>
        <button className='flex gap-1' onClick={() => handleClick()}>
          <p>{quote.comments.length}</p>
          <Comment commented={commented} />
        </button>
        <button className='flex gap-1' onClick={likeHandler}>
          <p>{quote.likes.length}</p>
          <Like liked={liked} />
        </button>
      </div>
      <div className='w-full h-[1px] bg-gray15 bg-opacity-30' />

      <ul>
        {quote.comments.map((comment: Comments) => (
          <li key={comment._id}>
            <CommentItem comment={comment} />
          </li>
        ))}
      </ul>
      <CommentInput quoteId={quote._id} commentRef={commentRef} />
    </div>
  );
};

export default Posts;
