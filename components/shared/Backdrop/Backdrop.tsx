import { useContext } from 'react';
import { MovieQuotesContext } from 'store';

const Backdrop = () => {
  const ctx = useContext(MovieQuotesContext);

  return (
    <>
      <div
        className='w-full h-full fixed bg-black opacity-80 backdrop-filter backdrop-blur-lg z-20'
        onClick={() => ctx.changeRegistrationModalState(false)}
      ></div>
    </>
  );
};

export default Backdrop;
