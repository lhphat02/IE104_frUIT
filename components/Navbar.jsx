import React from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
      <div>
        <Image
         src="/assets/fruit.png"
         objectFit='contain'
         width={32}
         height={32}
         alt=''
        />
      </div>
    </nav>
  );
}

export default Navbar