import React from 'react';
import { ModalTypes } from './types';

const Modal: React.FC<ModalTypes> = (props) => {
  const { className, children } = props;
  return (
    <>
      <div
        className={`${className} fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] bg-mainDark2 rounded-[10px] w-[35rem]  z-40 `}
      >
        {children}
      </div>
    </>
  );
};

export default Modal;
