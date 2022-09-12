import React from 'react';
import { Modal, Backdrop, Button } from 'components/shared';
import Image from 'next/image';
import { PopupTypes } from './types';
import Link from 'next/link';

const Popup: React.FC<PopupTypes> = (props) => {
  const { icon, heading, paragraph, buttonTxt, url, optionalParagraph } = props;

  return (
    <>
      <Backdrop />
      <Modal className='flex flex-col items-center justify-center fixed top-[30%] md:top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] bg-profileDialog rounded-[10px] w-[20rem] z-40 md:w-[30rem] md:h-[22rem]'>
        <div className='flex flex-col justify-center items-center w-full  gap-8 '>
          <div className='mt-6'>
            <Image src={icon} alt='popup-icon' width={70} height={70} />
          </div>
          <div className='flex flex-col items-center gap-4 w-full px-10 md:px-14'>
            <h1 className='text-2xl md:text-3xl font-bold text-white text-center'>
              {heading}
            </h1>
            <h3 className='text-base md:text-lg text-center text-white'>
              {paragraph}
            </h3>
            <div className='mb-6'>
              <Link href={url}>
                <a>
                  <Button
                    text={buttonTxt}
                    className='w-[15rem] md:w-[21rem] py-2  bg-red hover:bg-redHover'
                  />
                </a>
              </Link>
              <Link href={'/'}>
                <a>
                  <h4 className='text-sm md:text-base cursor-pointer  mt-4 text-center text-gray'>
                    {optionalParagraph}
                  </h4>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Popup;
