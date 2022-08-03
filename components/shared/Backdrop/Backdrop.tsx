import { useContext } from 'react';
import { AuthContext } from 'store';

const Backdrop = () => {
  const ctx = useContext(AuthContext);

  return (
    <>
      <div
        className='w-full h-full top-0 fixed bg-black opacity-80 backdrop-filter backdrop-blur-lg z-20'
        onClick={() => ctx.changeRegistrationModalState(false)}
      ></div>
    </>
  );
};

export default Backdrop;
