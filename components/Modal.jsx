import { useRef } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import images from '../assets';

const Modal = ({ header, body, footer, handleClose, closeBtn }) => {
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
      className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-40 iphoneSE:mt-10"
    >
      <div
        ref={modalRef}
        className="flex flex-col bg-white rounded-lg shadow-lg pc:w-2/5 mobile:w-4/5 sm:w-full dark:bg-prim-black-1 dark:shadow-none sm:rounded-none"
      >
        {closeBtn && (
          <div className="flex justify-end mt-4 mr-4">
            <div
              className="relative w-3 h-3 cursor-pointer"
              onClick={handleClose}
            >
              <Image
                src={images.cross}
                layout="fill"
                objectFit="cover"
                className={theme === 'light' ? 'filter invert' : undefined}
              />
            </div>
          </div>
        )}

        <div className="w-full p-4 text-center">
          <h2 className="text-2xl font-normal font-poppins dark:text-white text-prim-black-1">
            {header}
          </h2>
        </div>
        <div className="p-10 border-t border-b sm:p-7 sm:px-4 dark:border-prim-gray-3 border-prim-gray-1 ">
          {body}
        </div>
        <div className="p-7">{footer}</div>
      </div>
    </div>
  );
};

export default Modal;
