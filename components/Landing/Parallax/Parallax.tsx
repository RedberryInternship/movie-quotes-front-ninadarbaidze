import { ParallaxTypes } from './types';

const ParallaxQuote: React.FC<ParallaxTypes> = (props) => {
  const { imagePath, quote, film } = props;

  return (
    <>
      <div
        className='flex items-center w-screen h-screen bg-center bg-fixed bg-cover px-8 lg:px-24 relative'
        style={{ backgroundImage: `url(${imagePath})` }}
      >
        <div className='bg-gradient absolute top-0 left-0 w-screen h-screen ' />
        <div className='bg-gradient90deg absolute top-0 left-0 w-screen h-screen ' />
        <div className='flex relative gap-2 lg:gap-8 z-[50]'>
          <div className='absolute top-3 lg:top-6 h-[2px] w-4 lg:w-10 bg-white' />
          <div className='flex flex-col gap-8'>
            <p className='w-[90%] lg:w-[50rem] pl-6 lg:pl-16 font-bold text-white text-xl sm:text-3xl lg:text-5xl'>
              {quote}
            </p>
            <p className='font-bold pl-6 lg:pl-16 text-darkWhite text-sm lg:text-lg'>
              {film}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParallaxQuote;
