import React, { useContext, useState } from 'react';
import { Trash, EditBtn, PreviewIcon } from 'components';
import { ManageQuoteTypes } from './types';
import { useSession } from 'next-auth/react';
import { AuthContext } from 'store';
import { deleteQuote } from 'services';
import { useRouter } from 'next/router';

const ManageQuoteModal: React.FC<ManageQuoteTypes> = (props) => {
  const { id, setQuoteHandler } = props;
  const { data: session } = useSession();
  const ctx = useContext(AuthContext);
  const [deleteModal, setDeleteModal] = useState(false);
  const router = useRouter();

  const deleteHandler = async () => {
    let token = session ? session.accessToken : ctx.token;
    const quoteId = { quoteId: id };
    try {
      await deleteQuote(quoteId as unknown as string, token as string);
      setQuoteHandler(false);
      router.replace(`/feed/movies/${router.query.movieId}`);
    } catch (err: any) {}
  };

  return (
    <div className='flex flex-col justify-around px-8 py-3 bg-gray50 rounded-[10px] w-48 h-36 absolute top-6 right-0 text-white text-sm'>
      {deleteModal ? (
        <div className='flex flex-col items-center gap-4'>
          <h3 className='text-lg font-semibold'>Are you sure?</h3>
          <div className='flex gap-4'>
            <p
              className='bg-red px-2 py-1 rounded-xl text-sm cursor-pointer'
              onClick={() => deleteHandler()}
            >
              Yes
            </p>
            <p
              className='bg-green px-2 py-1 rounded-xl text-sm cursor-pointer'
              onClick={() => setDeleteModal(false)}
            >
              No
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className='flex items-center gap-2 cursor-pointer'>
            <PreviewIcon />
            <p>View Post</p>
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
            <EditBtn />
            <p>Edit</p>
          </div>
          <div
            className='flex items-center gap-2 cursor-pointer'
            onClick={() => setDeleteModal(true)}
          >
            <Trash />
            <p>Delete</p>
          </div>
        </>
      )}
    </div>
  );
};

export default ManageQuoteModal;
