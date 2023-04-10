import Image from 'next/legacy/image';
import { Button } from 'flowbite-react';
import { HiOutlineArrowRight, HiOutlineChevronUp } from 'react-icons/hi';
import { useRef } from 'react';

import assets from '../assets';

const aboutUS = () => {
  const slideOne = useRef(null);
  const slideTwo = useRef(null);

  const scrollToSlide = (slide) => {
    slide.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative w-full scroll-smooth">
      <div
        className="fixed z-20 p-4 overflow-hidden duration-100 ease-in-out bg-white rounded-full right-10 bottom-10 md:right-5 md:bottom-5 ring ring-prim-black-1 dark:ring-white dark:bg-slate-600 dark:hover:bg-slate-700 hover:-translate-y-2"
        onClick={() => scrollToTop()}
      >
        <HiOutlineChevronUp className="" />
      </div>
      <div className="bg-stack">
        <Image
          src={assets.bg11}
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
        <div className="top-0 left-0 flex flex-col items-center justify-center w-full h-full opacity-95 ">
          <h1 className="mb-10 text-5xl font-bold text-center opacity-95 font-poppins sm:text-xl md:text-3xl">
            What&#39;s{' '}
            <span className="text-6xl font-extrabold text-transparent md:text-3xl sm:text-xl bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-300">
              frUIT Marketplace
            </span>{' '}
            ?
          </h1>
          <p className="px-10 text-3xl font-medium text-center laptop:w-3/5 font-poppins sm:text-lg">
            This is a website that allows you - especially students from UIT to
            discover, create, collect and trade NFTs.
          </p>
          <Button
            color="light"
            pill
            className="mt-20 group"
            // href="/instruction"
            onClick={() => {
              scrollToSlide(slideOne);
            }}
          >
            Let&#39;s go
            <HiOutlineArrowRight className="w-5 h-5 ml-2 duration-100 ease-in-out group-hover:ml-5" />
          </Button>
        </div>
      </div>
      <div className="bg-stack" ref={slideOne}>
        <Image
          src={assets.bg10}
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
        <div className="top-0 left-0 flex flex-col items-center justify-center w-full h-full opacity-95 ">
          <h1 className="mb-10 text-5xl font-bold text-center opacity-95 font-poppins sm:text-2xl">
            What&#39;s frUIT Marketplace ?
          </h1>
          <p className="px-10 text-3xl font-semibold text-center laptop:w-3/5 font-poppins sm:text-lg">
            This is a website that allows you - especially students from UIT to
            discover, create and trade NFTs.
          </p>
          <Button
            color="light"
            pill
            className="mt-20 group"
            // href="/instruction"
            onClick={() => scrollToSlide(slideTwo)}
          >
            Get Started
            <HiOutlineArrowRight className="w-5 h-5 ml-2 duration-100 ease-in-out group-hover:ml-5" />
          </Button>
        </div>
      </div>
      <div className="bg-stack" ref={slideTwo}>
        <Image
          src={assets.bg12}
          layout="fill"
          objectFit="cover"
          className="opacity-40"
        />
      </div>
      <div className="bg-stack">
        <Image
          src={assets.bg13}
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>
    </div>
  );
};

export default aboutUS;
