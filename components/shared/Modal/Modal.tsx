import React from 'react';
import { ModalTypes } from './types';

const Modal: React.FC<ModalTypes> = (props) => {
  return (
    <>
      <div
        className={`${props.className} fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] bg-mainDark2 rounded-[10px] w-[35rem] h-[40rem] z-40 `}
      >
        {props.children}
      </div>
    </>
  );
};

export default Modal;
