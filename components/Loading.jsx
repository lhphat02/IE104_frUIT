import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import assets from '../assets';
const Loading = () => {
  const { theme } = useTheme();
  return (
    <div className="flex items-center justify-center m-5">
      <div className="flex items-center justify-center p-1 rounded-full md:p-1 bg-gradient-to-tr from-prim-blue to-prim-pink">
        <div
          className={`relative w-40 h-40 md:w-14 md:h-14 ${
            theme === 'dark' && 'filter invert'
          }`}
        >
          <Image
            src={assets.loading}
            alt=""
            objectFit="cover"
            layout="fill"
            className={`rounded-full`}
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
