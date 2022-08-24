import { Trash, EditBtn, PreviewIcon } from 'components';
import { ManageQuoteTypes } from './types';
import { useManageQuoteModal } from './useManageQuoteModal';

const ManageQuoteModal: React.FC<ManageQuoteTypes> = (props) => {
  const { id, setQuoteHandler, setViewQuote } = props;
  const { deleteHandler, deleteModal, setDeleteModal, quoteCtx } =
    useManageQuoteModal({
      id,
      setViewQuote,
    });

  return (
    <div className='flex flex-col justify-around px-8 py-3 bg-gray50 rounded-[10px] w-48 h-36 absolute top-6 right-0 text-white text-sm z-50'>
      {deleteModal ? (
        <div className='flex flex-col items-center gap-4'>
          <h3 className='text-lg font-semibold'>Are you sure?</h3>
          <div className='flex gap-4'>
            <p
              className='bg-red px-2 py-1 rounded-xl text-sm cursor-pointer'
              onClick={() => deleteHandler(setQuoteHandler)}
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
          <div
            className='flex items-center gap-2 cursor-pointer'
            onClick={() => setViewQuote(true)}
          >
            <PreviewIcon />
            <p>View Post</p>
          </div>
          <div
            className='flex items-center gap-2 cursor-pointer'
            onClick={() => quoteCtx.editQuoteHandler(true)}
          >
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
