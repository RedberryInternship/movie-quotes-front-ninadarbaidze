import { FeedModal, FeedQuoteForm } from 'components';
import { useAddQuoteModal } from './useAddQuoteModal';

const AddQuoteModal = () => {
  const { t } = useAddQuoteModal();

  return (
    <>
      <FeedModal className='px-[2%] w-[90%] md:w-[50%]'>
        <div className='flex items-center justify-center h-14 mb-2 border-b-[1px] border-gray15 border-opacity-20'>
          <h1 className='text-md text-white'>Add quote</h1>
        </div>

        <FeedQuoteForm />
      </FeedModal>
    </>
  );
};

export default AddQuoteModal;
