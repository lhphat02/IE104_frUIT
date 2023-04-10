import React from 'react';

const Input = ({ inputType, title, placeholder, handleClick }) => (
  <div className="w-full mt-10">
    <div>
      <p className="text-xl font-semibold font-poppins minlg:text-4xl sm:mb-4">
        {title}
      </p>
    </div>

    {inputType === 'number' ? (
      <div className="flex flex-row w-full px-4 py-3 mt-4 bg-white border rounded-lg outline-none dark:bg-prim-black-1 dark:border-prim-black-1 border-prim-gray-2 font-poppins">
        <input
          className="flex w-full text-base bg-white border-none rounded-sm dark:bg-prim-black-1 text-prim-gray-2 dark:focus:outline-white"
          type="number"
          placeholder={placeholder}
          onChange={handleClick}
          required
        />
        <p className="ml-4 text-xl font-semibold font-poppins">ETH</p>
      </div>
    ) : inputType === 'textarea' ? (
      <textarea
        className="w-full px-4 py-3 mt-4 text-base bg-white border rounded-lg resize-none outline-0 ring-0 dark:bg-prim-black-1 dark:border-prim-black-1 border-prim-gray-2 font-poppins text-prim-gray-2 dark:focus:outline-white "
        rows={10}
        placeholder={placeholder}
        onChange={handleClick}
        required
      />
    ) : (
      <input
        className="w-full px-4 py-3 mt-4 text-base bg-white border rounded-lg focus:outline-blue-600 dark:bg-prim-black-1 dark:border-prim-black-1 border-prim-gray-2 font-poppins text-prim-gray-2"
        placeholder={placeholder}
        onChange={handleClick}
        required
      />
    )}
  </div>
);

export default Input;
