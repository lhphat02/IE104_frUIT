import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import assets from '../assets';
const Loading = () => {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col items-center justify-center m-5">
      <div className="relative flex justify-center">
        <Image
          src={theme === 'light' ? assets.loadinglight : assets.loadingdark}
          alt=""
          width={300}
          height={300}
          objectFit="contain"
        />
        <p className="absolute text-2xl font-bold bottom-5">Loading..</p>
      </div>
    </div>
  );
};

export default Loading;
