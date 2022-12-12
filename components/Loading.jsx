import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import assets from '../assets';
const Loading = () => {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col  justify-center items-center  m-2">
      <div className=" flex relative  justify-center">
        <Image
          src={theme === 'dark' ?  assets.loadingdark :assets.loadinglight }
          alt=""
          width={300}
          height={300}
          objectFit="contain"
        />
        <p className="absolute text-2xl font-semibold text-prim-gray-2 font-poppins bottom-3">
          Loading. .
        </p>
      </div>
    </div>
  );
};

export default Loading;
