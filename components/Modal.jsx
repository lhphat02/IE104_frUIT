import { useRef } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import images from '../assets';

const Modal = ({ header, body, footer, handleClose }) => {
  const modalRef = useRef(null);
  const { theme } = useTheme();

  // check if it is clicked outside of modalRef
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handleClose();
    }
  };

  return (
    <div
      onClick={handleClickOutside}
      className="flex justify-center items-center fixed inset-0 top-10image.png"
    >
      <div ref={modalRef} className="flex flex-col w-2/5 bg-white rounded-lg dark:bg-prim-black-1">
        <div className="flex justify-end mt-4 mr-4">
          <div className="relative w-3 h-3 cursor-pointer" onClick={handleClose}>
            <Image src={images.cross} layout="fill" className={theme === 'light' ? 'filter invert' : undefined} />
          </div>
        </div>

        <div className="w-full p-4 text-center">
          <h2 className="text-2xl font-normal font-poppins dark:text-white text-prim-black-1">{header}</h2>

        </div>
        <div className="p-10 border-t border-b sm:px-4 dark:border-prim-gray-3 border-prim-gray-1">
          {body}
        </div>
        <div className="p-6">
          {footer}
        </div>
      </div>
    </div>
  );
};

export default Modal;