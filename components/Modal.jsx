import { useRef } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import images from '../assets';

const Modal = ({ header, body, footer, handleClose }) => {
  const modalRef = useRef(null);
  const { theme } = useTheme();

  // check if it is clicked outside of modalRef
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleClose();
    }
  };

  return (
    <div
      onClick={handleClickOutside}
      className="fixed inset-0 z-10 flex items-center justify-center tablet:top-8 nestHub:top-10 sm:top-96 surfaceDuo:top-48 
                sm:-bottom-16 xs:top-80 iphoneSE:top-56"
    >
      <div
        ref={modalRef}
        className="flex flex-col bg-white rounded-lg shadow-lg pc:w-2/5 mobile:w-4/5 sm:w-full dark:bg-prim-black-1 dark:shadow-none"
      >
        <div className="flex justify-end mt-4 mr-4">
          <div
            className="relative w-3 h-3 cursor-pointer"
            onClick={handleClose}
          >
            <Image
              src={images.cross}
              layout="fill"
              className={theme === 'light' ? 'filter invert' : undefined}
            />
          </div>
        </div>

        <div className="w-full p-4 text-center">
          <h2 className="text-2xl font-normal font-poppins dark:text-white text-prim-black-1">
            {header}
          </h2>
        </div>
        <div className="p-10 border-t border-b sm:p-7 sm:px-4 dark:border-prim-gray-3 border-prim-gray-1">
          {body}
        </div>
        <div className="p-7 iphoneSE:pb-24">{footer}</div>
      </div>
    </div>
  );
};

export default Modal;
