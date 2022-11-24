import React from 'react';

const Button = ({ classStyles, btnName, handleClick }) => (
  <button
    type="button"
    className={`prim-gradient text-sm minlg:text-lg px-6 py-2 minlg:px-8 font-poppins font-semibold text-white shadow-md ${classStyles}`}
    onClick={handleClick}
  >
    {btnName}
  </button>
);

export default Button;
