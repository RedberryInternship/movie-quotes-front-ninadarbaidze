import {
  CommentInput,
  CommentItem,
  DeleteQuoteModal,
  FeedWrapper,
  Like,
  Trash,
  Comment,
} from 'components';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Comments, QuoteDetailsType } from 'types';
import Image from 'next/image';
import { useQuoteId } from 'hooks';
import Head from 'next/head';

const QuoteId: React.FC<QuoteDetailsType> = (props) => {
  const { data } = props;
  const {
    t,
    myLoader,
    deleteModal,
    setDeleteModal,
    deleteQuoteHandler,
    likeHandler,
    liked,
    commented,
    handleClick,
    commentRef,
    likes,
    comments,
    cuurLang,
  } = useQuoteId({ data });

  return (
    <>
      <Head>
        <title>{`${
          cuurLang === 'en' ? 'Quote' : 'ციტატა'
        } - Movie Quotes`}</title>
        <meta
          name='description'
          content={`${
            cuurLang === 'en' ? data.quoteEN : data.quoteGE
          } - Movie Quotes`}
        />
      </Head>
      <FeedWrapper>
        {deleteModal && <DeleteQuoteModal setDeleteModal={setDeleteModal} />}
        <div className=' bg-mainDark w-[100%] lg:w-[70%] rounded-[12px] px-[5%] mt-10'>
          <h1 className='text-2xl text-white text-center py-8'>
            {t('quotes:quote')}
          </h1>
          <div className='flex gap-4 px-[4%] pt-5 items-center absolute top-0 left-0'>
            <button onClick={() => deleteQuoteHandler()}>
              <Trash />
            </button>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center relative'>
              <div className='py-2 italic placeholder:text-white text-white  pl-3 w-[100%] border-gray20 bg-mainDark border-[1px] rounded-[4px] px-12 truncate'>
                <p>{data.quoteEN}</p>
              </div>
              <p className='absolute right-4 cursor-pointer text-gray20'>Eng</p>
            </div>
            <div className='flex items-center relative '>
              <div className='py-2 italic placeholder:text-white text-white  pl-3 w-[100%] border-gray20 bg-mainDark border-[1px] rounded-[4px] px-12 truncate'>
                <p>{data.quoteGE}</p>
              </div>
              <p className='absolute right-4 cursor-pointer text-gray20'>ქარ</p>
            </div>
            <div className='flex overflow-clip w-full relative rounded-[10px] object-cover'>
              <Image
                loader={myLoader}
                src={`${process.env.NEXT_PUBLIC_API_URL}/${data.image}`}
                alt='imagePreview'
                objectFit='cover'
                width={'800px'}
                height={'450px'}
              />
            </div>
            <div className='flex items-center gap-4 text-white'>
              <button className='flex items-center gap-1' onClick={handleClick}>
                <p>{comments.length}</p>
                <Comment commented={commented as boolean} />
              </button>
              <button className='flex items-center gap-1' onClick={likeHandler}>
                <p>{likes.length}</p>
                <Like liked={liked as boolean} />
              </button>
            </div>
            <ul>
              <div className='w-full h-[1px] mb-4 z-50 bg-gray15 bg-opacity-30' />
              {comments &&
                comments.map((comment: Comments) => (
                  <li key={comment._id}>
                    <CommentItem comment={comment} />
                  </li>
                ))}
            </ul>
            <CommentInput quoteId={data._id} commentRef={commentRef} />
          </div>
        </div>
      </FeedWrapper>
    </>
  );
};

export default QuoteId;

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  params,
}) => {
  const quoteId = params!.quoteId;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/quote/${quoteId}`
  );

  const res = await response.json();

  return {
    props: {
      data: res.quote,
      ...(await serverSideTranslations(locale!, [
        'profile',
        'home',
        'genres',
        'movies',
        'quotes',
      ])),
    },
  };
};
