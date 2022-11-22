import React, { useEffect, useState, useContext } from 'react';
import router, { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

import { Context } from '../context/Context';
import Button from './Button';
import assets from '../assets';

// ----------------------------------------------MenuItems-------------------------------------------
const MenuItems = ({ isMobile, active, setActive, setIsOpen }) => {
  const generateLink = (i) => {
    switch (i) {
      case 0:
        return '/';
      case 1:
        return '/listed';
      case 2:
        return '/collection';
      default:
        return '/';
    }
  };

  return (
    <ul className={`list-none flex ${isMobile ? 'flex-col' : 'flex-row'}`}>
      {['Explore', 'Listed', 'Collection'].map((item, i) => (
        <li
          key={i}
          onClick={() => {
            setActive(item);
            if (isMobile) setIsOpen(false);
          }}
          className={`flex justify-center font-poppins items-center font-semibold text-base 
          hover:text-prim-black-4 dark:hover:text-white mx-3 text-prim-gray-2 
          ${
            active === item
              ? 'text-prim-black-4 dark:text-white'
              : 'text-prim-gray-2'
          }
          ${isMobile && 'my-3 text-2xl'}
          `}
        >
          <Link href={generateLink(i)}>{item}</Link>
        </li>
      ))}
    </ul>
  );
};

// -----------------------------------------ButtonGroup-------------------------------------------------
const ButtonGroup = ({ isMobile }) => {
  const { connectWallet, currentAccount } = useContext(Context);

  return currentAccount ? (
    <Button
      BtnName="Create"
      classStyles={`mx-2 rounded-xl active:scale-110 duration-100 ${
        isMobile && 'text-2xl px-20 py-4'
      }`}
      handleClick={() => {
        router.push('/create');
      }}
    />
  ) : (
    <Button
      BtnName="Connect"
      classStyles="mx-2 rounded-xl active:scale-110 duration-100"
      handleClick={() => {
        connectWallet();
      }}
    />
  );
};

const checkActive = (active, setActive, router) => {
  switch (router.pathname) {
    case '/':
      active !== 'Explore' && setActive('Explore');
      break;
    case '/listed':
      active !== 'Listed' && setActive('Listed');
      break;
    case '/collection':
      active !== 'Collection' && setActive('Collection');
      break;
    default:
      setActive('');
      break;
  }
};

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [active, setActive] = useState('Explore');
  const [IsOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    checkActive(active, setActive, router);
  }, [router.pathname]);

  console.log(theme);

  return (
    <nav className="flex flex-row justify-between items-center w-full fixed z-10 p-4 border-b bg-white border-prim-gray-1 dark:border-prim-dark dark:bg-prim-dark shadow-md">
      {/* ========================BrandName======================== */}
      <div className="flex flex-1 justify-start ml-2">
        <Link href="/">
          <div className="justify-center items-center flex flex-row md:hidden cursor-pointer">
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
          <div
            className="hidden md:flex cursor-pointer"
            onClick={() => {
              setActive('Explore');
              setIsOpen(false);
            }}
          >
            <Image
              src={assets.logo}
              objectFit="contain"
              width={28}
              height={28}
              alt="logo"
            />
            <p className="flex flex-row dark:text-white text-prim-black-1 font-bold font-poppins text-sm ml-2 mt-1.5">
              frUIT
            </p>
          </div>
        </Link>
      </div>

      {/* ========================MenuItems======================== */}

      {/* =========DarkMode Toggle========= */}
      <div className="flex mx-4 hover:cursor-pointer p-1 bg-gradient-to-br to-prim-blue from-prim-pink rounded-full shadow-md">
        <Image
          src={assets.moon}
          alt="toggle"
          width={20}
          height={20}
          onClick={() => {
            setTheme(theme === 'light' ? 'dark' : 'light');
          }}
        />
      </div>

      {/* =========Large Devices========= */}
      <div className="md:hidden flex">
        <MenuItems active={active} setActive={setActive} />
        <ButtonGroup />
      </div>

      {/* =========Small Devices========= */}
      <div className="hidden md:flex flex-row justify-end">
        <div className="prim-gradient rounded p-2 shadow-md flex">
          {IsOpen ? (
            <Image
              className="hover:cursor-pointer"
              src={assets.cross}
              alt="sm-close"
              objectFit="contain"
              width={20}
              height={20}
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <Image
              className="hover:cursor-pointer"
              src={assets.menu}
              alt="sm-menu"
              objectFit="contain"
              width={20}
              height={20}
              onClick={() => setIsOpen(true)}
            />
          )}
          {IsOpen && (
            <div
              className="fixed inset-x-0 flex flex-col dark:bg-prim-dark bg-white pb-160
                            mt-7 sm:pt-140 pt-56 max-h-full"
            >
              <div className="flex justify-center mb-5 mt-10">
                <ButtonGroup isMobile />
              </div>
              <div className="flex justify-center sm:pb-60">
                <MenuItems
                  isMobile
                  active={active}
                  setActive={setActive}
                  setIsOpen={setIsOpen}
                />
              </div>
              <div className="flex justify-evenly mt-64 sm:pt-64">
                {[
                  assets.facebook,
                  assets.instagram,
                  assets.telegram,
                  assets.twitter,
                  assets.discord,
                ].map((image, i) => (
                  <Image
                    key={i}
                    src={image}
                    className={`hover:cursor-pointer ${
                      theme === 'light' && 'filter invert'
                    }`}
                    objectFit="contain"
                    width={20}
                    height={20}
                    alt="socialMedia"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
