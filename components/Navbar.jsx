import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Button from './Button';
import assets from '../assets';

// ----------------------------------------------MenuItems-------------------------------------------
const MenuItems = () => {
  const generateLink = (i) => {
    switch (i) {
      case 0: return '/';
      case 1: return '/listed';
      case 2: return '/collection';
      default: return '/';
    }
  };

  return (
    <ul className='list-none flex flex-row'>
      {['Explore', 'Listed NFTs', 'Collection'].map((item, i) => (
        <li
          key={i}
          className='flex flex-row font-poppins items-center font-semibold text-base hover:text-prim-dark mx-3 text-prim-gray-2'
        >
          <Link href={generateLink(i)}>{item}</Link>
        </li>
      ))}
    </ul>
  );
};

// -----------------------------------------ButtonGroup-------------------------------------------------
const ButtonGroup = () => {
    const connected = true;

    return connected ? (
      <Button
        BtnName="Create"
        classStyles="mx-2 rounded-xl"
      /> 
      ) : (
      <Button
        BtnName="Connect"
        classStyles="mx-2 rounded-xl"
      />
      );
};

// --------------------------------------------Navbar----------------------------------------------------
const Navbar = () => {
  return (

    <nav className="flex flex-row justify-between items-center w-full fixed z-10 p-4 border-b bg-white
      border-prim-gray-1 "
    >
      <div
        className="flex flex-1 justify-start"
      >
        <Link href="/">
          <div
            className="justify-center items-center flex flex-row md:hidden cursor-pointer"
          >
            <Image
              src={assets.logo}
              objectFit="contain"
              width={32}
              height={32}
              alt="logo"
            />
            <p className="flex flex-row dark:text-white text-prim-black-1 font-bold font-poppins text-lg ml-2 mt-1.5">
              frUIT
            </p>
          </div>
        </Link>
        <Link href="/">
          <div className="hidden md:flex cursor-pointer" 
          onClick={() => {}}
          >
            <Image
              src={assets.logo}
              objectFit="contain"
              width={32}
              height={32}
              alt="logo"
            />
          </div>
        </Link>
      </div>
      <div className="flex flex-initial flex-row justify-end">
        <div className="md:hidden flex">
          <MenuItems />
          <div>
            <ButtonGroup  />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
 