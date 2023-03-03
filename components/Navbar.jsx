import React, { useEffect, useState, useContext } from 'react';
import router, { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

import { Context } from '../context/Context';
import Button from './Button';
import assets from '../assets';
import Searchbar from './Searchbar';

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
      btnName="Create"
      classStyles={`mx-2 rounded-xl active:scale-110 duration-100 ${
        isMobile && 'text-2xl px-16 py-4 sm:px-8 sm:py-2 sm:text-xl'
      }`}
      handleClick={() => {
        router.push('/create');
      }}
    />
  ) : (
    <Button
      btnName="Connect"
      classStyles={`mx-2 rounded-xl active:scale-110 duration-100 ${
        isMobile && 'text-2xl px-16 py-4 sm:px-8 sm:py-2 sm:text-xl'
      }`}
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
  const [atTop, setAtTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const render = 0;

  useEffect(() => {
    checkActive(active, setActive, router);
  }, [router.pathname]);

  // check if on top of page
  useEffect(() => {
    window.onscroll = () =>
      window.pageYOffset === 0 ? setAtTop(true) : setAtTop(false);
  });

  // disable body scroll when navbar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isOpen]);

  console.log(theme);

  return (
    <nav
      className={`fixed z-20 flex flex-row items-center justify-between w-full p-4 bg-white border-b border-prim-gray-1 dark:border-prim-black-1 dark:bg-prim-dark ${
        atTop
          ? 'shadow-lg'
          : 'filter backdrop-blur-lg bg-opacity-75 dark:filter dark:backdrop-blur-lg dark:bg-opacity-75  '
      }`}
    >
      {/* ========================BrandName======================== */}
      <div className="flex justify-start flex-1 ml-2">
        <Link href="/">
          <div className="flex flex-row items-center justify-center cursor-pointer md:hidden">
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
            className="hidden cursor-pointer md:flex"
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
      <div className="flex p-1 mx-4 rounded-full shadow-md hover:cursor-pointer bg-gradient-to-br to-prim-blue from-prim-pink">
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
      <div className="flex md:hidden">
        <MenuItems active={active} setActive={setActive} />
        <ButtonGroup />
      </div>

      {/* =========Small Devices========= */}
      <div className="flex-row justify-end hidden h-full md:flex">
        <div className="flex p-2 rounded shadow-md prim-gradient">
          {isOpen ? (
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
          {isOpen && (
            <div
              className={`fixed inset-x-0 flex flex-col bg-white h-900 dark:bg-prim-dark mt-11 md:pt-28 ${
                atTop
                  ? 'shadow-lg'
                  : 'filter backdrop-blur-lg bg-opacity-95 dark:bg-prim-dark'
              }`}
            >
              <div className="flex justify-center mb-5 mt-28">
                <ButtonGroup isMobile />
              </div>
              <div className="flex justify-center">
                <MenuItems
                  isMobile
                  active={active}
                  setActive={setActive}
                  setIsOpen={setIsOpen}
                />
              </div>
              <div
                className={`fixed flex w-full bottom-80 xs:bottom-40 galaxyfold:bottom-10 justify-evenly ${
                  atTop && 'md:bottom-16'
                }`}
              >
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
