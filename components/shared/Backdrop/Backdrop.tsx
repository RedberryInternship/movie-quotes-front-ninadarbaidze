import { useContext } from 'react';
import { AuthContext } from 'store';

const Backdrop = () => {
  const ctx = useContext(AuthContext);

  const closeModalHandler = () => {
    ctx.changeRegistrationModalState(false);
    ctx.changeLoginModalState(false);
    ctx.changePasswordRecoveryState(false);
  };

  return (
    <>
      <div
        className='w-full h-full top-0 left-0 fixed bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm z-20'
        onClick={closeModalHandler}
      ></div>
    </>
  );
};

export default Backdrop;
