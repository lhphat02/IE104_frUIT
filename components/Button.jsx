import React from "react";

const Button=({classStyles, BtnName, handleClick}) => (
    <button
    type="button"
    className={`prim-gradient text-sm minlg:text-lg px-6 py-2 minlg:px-8 font-poppins font-semibold text-white ${classStyles}`}
    onClick="handleClick">
    {BtnName}
    </button>

)

export default Button