import React, { useState } from 'react';
import Image from 'next/image'; 
import { useTheme } from 'next-themes';

import assets from '../assets';

const SearchBar = ({ placeholder, searchChange }) => {
  const { theme } = useTheme();
  return (
    <div className='flex flex-row'>
    <div className='absolute ml-3 mt-7'>      
      <Image 
        src={assets.Search}
        alt='Search'
        width={22}
        height={22}
        className={`hover:cursor-pointer ${theme === 'light' && 'filter invert'}`}
      />
      </div>

      <input
        className="dark:bg-prim-black-1 bg-prim-gray-1 dark:border-prim-black-1 border-prim-gray-2 rounded-lg w-900 md:w-500 galaxyfold:w-200
                      outline-none font-poppins text-prim-gray-2 text-base mt-4 px-4 py-3 pl-12"
        placeholder={placeholder}
        onChange={searchChange}
      />
    </div>
    
  );
};

export default SearchBar;



