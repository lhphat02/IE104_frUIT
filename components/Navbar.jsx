import { useState, useEffect, useContext } from 'react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import Button from './Button';
import images from '../assets/index';
import assets from '../assets';

// Mấy cái đề mục chuyển trang v.v
const MenuItems = ({ isMobile, active, setActive }) => {
  const generateLink = (i) => {
    switch (i) {
      case 0: return '/';
      case 1: return '/listed-nfts';
      case 2: return '/my-nfts';
      default: return '/';
    }
  };

  return (
    <ul className={`list-none flexCenter flex-row ${isMobile && 'flex-col h-full'}`}>
      {['Explore', 'Listed NFTs', 'Collection'].map((item, i) => (
        <li
          key={i}
          onClick={() => {
            setActive(item);
          }}
          className={`flex flex-row font-poppins items-center font-semibold text-base dark:hover:text-white hover:text-prim-dark mx-3 
              ${active === item
            ? 'dark:text-white text-prim-black-1'
            : 'dark:text-prim-gray-3 text-prim-gray-2'
              }`}
        >
          <Link href={generateLink(i)}>{item}</Link>
        </li>
      ))}
    </ul>
  );
};

// Nút Create với Connect
const ButtonGroup = ({ setActive, router }) => {
  // Chỗ này có vài hàm chưa có thì tự kiếm cách
  // thay như t chỉ hồi hqua, currentAccount là điều kiện if else
  // nghĩa là nó là boolean thì thay bằng static var như true , false , etc...
  // Nhma khoan làm cái này , tại phải đợi thằng tuấn anh làm xong cái cmp button :v
    const currentAccount = ({});
    return(
    currentAccount ? (
    <Button
      btnName="Create"
      classStyles="mx-2 rounded-xl"
      handleClick={() => {
        setActive('');
        router.push('/Create_NFT');
      }}
    />
  ) : (
    <Button
      btnName="Connect"
      classStyles="mx-2 rounded-xl"
      handleClick={'none'}
    />
  ))
};

//   Navbar
const Navbar = () => {
  // const { theme, setTheme } = useTheme();
  const router = useRouter();
  const [active, setActive] = useState('Explore');
  const [isOpen, setIsOpen] = useState(false);

  return (

    <nav className="flexBetween w-full fixed z-10 p-4 flex-row border-b dark:bg-prim-dark bg-white dark:border-prim-black-1
      border-prim-gray-1 "
    >

      {/* ===================Brand=================== */}
      <div
        className="flex flex-1  justify-start"
      >
        <Link href="/">
          <div
            className="flexCenter md:hidden cursor-pointer"
            onClick={() => {
              setActive('Explore');
            }}
          >
            <Image
              src={assets.logo}
              objectFit="contain"
              width={32}
              height={32}
              alt="logo"
            />
            <p className="dark:text-white text-prim-black-1 font-semibold text-lg ml-1">
              frUIT
            </p>
          </div>
        </Link>
        <Link href="/">
          <div className="hidden md:flex cursor-pointer" onClick={() => {}}>
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

      {/* ===================Menu Items (Large Device)=================== */}
      <div className="flex flex-initial flex-row justify-end">

        {/* Cái toggle dark light mode này t phụ cho`
        tại vì nó hơi liên quan nhiều thứ , code thêm phần này cũng đc
        nhma nhớ comment nó để khỏi bị lỗi , xong r t lên t sửa */}

        {/* ===================Dark/Light Toggle=================== */}
        {/* <div className="flex items-center mr-2">
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          />
          <label
            htmlFor="checkbox"
            className="flexBetween w-8 h-4 dark:bg-black bg-prim-gray-2 rounded-2xl p-1 relative label"
          >
            <i className="fas fa-sun" />
            <i className="fas fa-moon" />
            <div className="w-3 h-3 absolute bg-white rounded-full ball" />
          </label>
        </div> */}

        {/* =======================Menu Item======================= */}
        <div className="md:hidden flex">
          <MenuItems active={active} setActive={setActive} />
          <div>
            <ButtonGroup setActive={setActive} router={router} />
          </div>
        </div>

      </div>

      {/* ===================Menu Items (Medium Device)=================== */}
      <div className="hidden md:flex ml-2">
        {isOpen
          ? (
            <Image
              src={assets.cross}
              objectFit="contain"
              width={20}
              height={20}
              alt="close"
              onClick={() => setIsOpen(false)}
              // className={theme === 'light' && 'filter invert'}
            />
          ) : (
            <Image
              src={assets.menu}
              objectFit="contain"
              width={25}
              height={25}
              alt="open"
              onClick={() => setIsOpen(true)}
              // className={theme === 'light' && 'filter invert'}
            />
          )}

        {isOpen && (
          <div className="flex fixed inset-0 top-65
           dark:bg-prim-dark bg-white z-10 nav-h justify-between flex-col p-1"
          >
            <div className="flex-1 p-4">
              <MenuItems active={active} setActive={setActive} isMobile />
            </div>
            <div className="p-4 border-t dark:border-prim-black-1 border-prim-gray-1 flexCenter">
              <ButtonGroup setActive={setActive} router={router} />
            </div>
          </div>
        )}
      </div>

    </nav>
  );
};

export default Navbar;