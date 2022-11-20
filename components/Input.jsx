import React from 'react'

const Input = ({inputType, title,  placeholder, handleClick }) => {
  return (
    <div className="mt-10 w-full">
      <div>
        <p className="font-poppins text-xl minlg:text-4xl font-semibold sm:mb-4">
          {title}
        </p>
      </div>

      {inputType === 'number' ? (
        <div className="dark:bg-prim-black-1 bg-white border dark:border-prim-black-1 border-prim-gray-2 rounded-lg w-full outline-none font-poppins mt-4 px-4 py-3 flex flex-row">
          <input
            className="flex w-full dark:bg-prim-black-1 bg-white outline-none text-prim-gray-2 text-base  "
            type="number"
            placeholder={placeholder}
            onChange={handleClick}
          />
          <p className="font-poppins text-xl minlg:text-4xl font-semibold">ETH</p>
        </div>
      ) : inputType === 'textarea' ? (
        <textarea
          className="dark:bg-prim-black-1 bg-white border dark:border-prim-black-1 border-prim-gray-2 rounded-lg w-full outline-none font-poppins text-prim-gray-2 text-base mt-4 px-4 py-3"
          rows={10}
          placeholder={placeholder}
          onChange={handleClick}
        />
      ) : (
        <input
          className="dark:bg-prim-black-1 bg-white border dark:border-prim-black-1 border-prim-gray-2 rounded-lg w-full outline-none font-poppins text-prim-gray-2 text-base mt-4 px-4 py-3"
          placeholder={placeholder}
          onChange={handleClick}
        />
      )}
    </div>
  );
}

export default Input