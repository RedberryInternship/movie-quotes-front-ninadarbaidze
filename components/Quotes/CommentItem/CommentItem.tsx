import React from 'react';
import Image from 'next/image';
import { useCommentItem } from './useCommentItem';

const CommentItem = (props) => {
  const { comment } = props;
  const {} = useCommentItem();
  console.log(comment);

  const myLoader = () => {
    return `${process.env.NEXT_PUBLIC_API_URL}/${comment.userId.profileImage}`;
  };
  return (
    <>
      <div className='flex gap-3 mt-3'>
        <div>
          <div
            className={`w-10 h-10  mt-[-0.5rem] rounded-full overflow-clip border-2 border-mainDark2`}
          >
            <Image
              loader={myLoader}
              src={`${process.env.NEXT_PUBLIC_API_URL}/${comment.userId.profileImage}`}
              // src={'/assets/images/profile.png'}
              alt='profile-icon'
              width={150}
              height={150}
            />
          </div>
        </div>
        <div className='text-white w-full'>
          <p>{comment.userId.username}</p>
          <p>{comment.comment}</p>
          <div className='w-full h-[1px] bg-gray15 bg-opacity-30 mt-2' />
        </div>
      </div>
    </>
  );
};

export default CommentItem;
