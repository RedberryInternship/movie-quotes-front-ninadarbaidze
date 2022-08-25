import React from 'react';
import Image from 'next/image';
import { useCommentItem } from './useCommentItem';

const CommentItem = () => {
  const {} = useCommentItem();
  return (
    <>
      <div className='flex gap-3 mt-3'>
        <div>
          <div
            className={`w-10 h-10  mt-[-0.5rem] rounded-full overflow-clip border-2 border-mainDark2`}
          >
            <Image
              // loader={myLoader}
              // src={imagePreviewHandler(userCtx, session)}
              src={'/assets/images/profile.png'}
              alt='profile-icon'
              width={150}
              height={150}
            />
          </div>
        </div>
        <div className='text-white '>
          <p>sxva iuseri</p>
          <p>
            comentaria escomentaria escomentaria escomentaria escomentaria
            escomentaria es
          </p>
          <div className='w-full h-[1px] bg-gray15 bg-opacity-30 mt-2' />
        </div>
      </div>
    </>
  );
};

export default CommentItem;
