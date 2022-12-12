import React from 'react';

const Button = ({ classStyles, btnName, handleClick, cancelBg }) => (
  <button
    type="button"
    className={cancelBg ? `text-sm minlg:text-lg px-6 py-2 minlg:px-8 font-poppins font-semibold text-prim-pink dark:text-prim-blue border-2 dark:border-prim-blue border-prim-pink shadow-md ${classStyles}`
                        :`text-sm minlg:text-lg font-poppins font-semibold px-6 py-2 minlg:px-8 text-white shadow-md reverse-prim-gradient dark:prim-gradient  ${classStyles}`}
    onClick={handleClick}
  >
    {btnName}
  </button>
);

export default Button;
