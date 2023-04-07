import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import assets from '../assets';

const SearchBar = ({ placeholder, searchChange }) => {
  const { theme } = useTheme();
  return (
    <div className="flex flex-row w-full">
      <div className="absolute ml-3 mt-7">
        <Image
          src={assets.Search}
          alt="Search"
          width={22}
          height={22}
          className={`hover:cursor-pointer ${
            theme === 'light' && 'filter invert'
          }`}
        />
      </div>

      <input
        className="w-full px-4 py-3 pl-12 mt-4 text-base rounded-lg outline-none dark:bg-prim-black-1 bg-prim-gray-1 dark:border-prim-black-1 border-prim-gray-2 font-poppins text-prim-gray-2"
        placeholder={placeholder}
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBar;
