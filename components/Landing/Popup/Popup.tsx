import React from 'react';
import { Modal, Backdrop, Button } from 'components/shared';
import Image from 'next/image';
import { PopupTypes } from './types';
import Link from 'next/link';

const Popup: React.FC<PopupTypes> = (props) => {
  const { icon, heading, paragraph, buttonTxt, url } = props;

  return (
    <>
      <Backdrop />
      <Modal className='h-[30rem]'>
        <div className='flex flex-col justify-center items-center gap-8 h-[30rem]'>
          <div>
            <Image src={icon} alt='popup-icon' width={70} height={70} />
          </div>
          <div className='flex flex-col items-center gap-8 w-[65%]'>
            <h1 className='text-3xl font-bold text-white text-center'>
              {heading}
            </h1>
            <h3 className='text-xl text-center text-white'>{paragraph}</h3>
            <Link href={url}>
              <a>
                <Button
                  text={buttonTxt}
                  className='w-full h-10 bg-red hover:bg-redHover'
                />
              </a>
            </Link>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Popup;
