import { DeleteModalTypes } from './types';
import { useDeleteQuoteModal } from './useDeleteQuoteModal';

const DeleteQuoteModal: React.FC<DeleteModalTypes> = (props) => {
  const { setViewQuote, setDeleteModal } = props;
  const { t, deleteHandler } = useDeleteQuoteModal({ setViewQuote });

  return (
    <>
      <div className='flex flex-col justify-around absolute top-12 left-5 px-8 py-3 z-50 bg-gray50 rounded-[10px] w-48 h-36 right-0 text-white text-sm'>
        <div className='flex   flex-col items-center gap-4'>
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
      </div>
    </>
  );
};

export default DeleteQuoteModal;
