import { useRef } from 'react';
import { Button } from 'flowbite-react';
import Image from 'next/legacy/image';
import { HiOutlineArrowRight, HiOutlineChevronUp } from 'react-icons/hi';
import { useInView } from 'react-intersection-observer';
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTelegram,
} from 'react-icons/bs';

import Link from 'next/link';
import assets from '../assets';

const aboutUS = () => {
  const slideTwo = useRef(null);
  const slideThree = useRef(null);
  const slideFour = useRef(null);

  const scrollToSlide = (slide) => {
    slide.current?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const { ref: refSlideTwo, inView: inSlideTwo } = useInView();
  const { ref: refSlideThree, inView: inSlideThree } = useInView();
  const { ref: refSlideFour, inView: inSlideFour } = useInView();

  return (
    <div className="relative w-full scroll-smooth">
      {/* Scroll to top button */}
      <div
        className="fixed z-20 p-4 overflow-hidden duration-100 ease-in-out bg-white rounded-full right-10 bottom-10 md:right-5 md:bottom-5 ring ring-slate-600 dark:ring-white dark:bg-slate-600 dark:hover:bg-slate-700 hover:-translate-y-2"
        onClick={() => scrollToTop()}
      >
        <HiOutlineChevronUp />
      </div>

      {/* First Slide */}
      <div className="bg-stack">
        <Image
          src={assets.bg11}
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
        <div className="top-0 left-0 flex flex-col items-center justify-center w-full h-full opacity-95 ">
          <h1 className="mb-10 text-5xl font-bold text-center opacity-95 font-poppins sm:text-xl md:text-3xl">
            Welcome to{' '}
            <div className="text-6xl font-extrabold text-transparent md:text-4xl sm:text-xl bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-300">
              frUIT Marketplace
            </div>
          </h1>
          <p className="px-10 text-3xl font-medium text-center laptop:w-3/5 font-poppins md:text-lg">
            This is a website that allows you - especially students from UIT to
            discover, create, collect and trade NFTs.
          </p>
          <Button
            color="light"
            pill
            className="mt-20 group"
            // href="/instruction"
            onClick={() => {
              scrollToSlide(slideTwo);
            }}
          >
            See more
            <HiOutlineArrowRight className="w-5 h-5 ml-2 duration-100 ease-in-out group-hover:ml-5" />
          </Button>
        </div>
      </div>

      {/* Second Slide */}
      <div className="bg-stack" ref={slideTwo}>
        <Image
          src={assets.bg10}
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
        <div
          ref={refSlideTwo}
          className="top-0 left-0 flex flex-row items-center justify-between w-full h-full p-10 sm:p-0 opacity-95 md:flex-col"
        >
          <div className="flex flex-col items-center justify-center flex-initial w-full ml-auto mr-auto">
            <h3
              className={`mb-10  sm:mt-32 text-5xl font-bold text-center font-poppins  sm:text-xl opacity-95 filter blur-md -translate-x-10 md:text-3xl px-10 ${
                inSlideTwo
                  ? ' translate-x-0 blur-none duration-700 transition ease-in-out'
                  : null
              }`}
            >
              Discover the best{' '}
              <span className="text-5xl font-extrabold text-transparent sm:text-3xl bg-clip-text bg-gradient-to-r to-pink-400 via-purple-400 from-cyan-300">
                NFTs
              </span>
            </h3>
            <p
              className={`px-10 text-3xl font-normal text-center md:text-xl laptop:w-3/5 font-poppins sm:text-lg filter blur-md -translate-x-10 ${
                inSlideTwo
                  ? ' translate-x-0 blur-none duration-700 transition ease-in-out'
                  : null
              }`}
            >
              Explore and collect the best NFTs from UIT
            </p>

            <Button
              color="light"
              pill
              className={`mt-20 md:mt-10 group opacity-95 filter blur-md  ${
                inSlideTwo
                  ? '-translate-y-10 delay-200 blur-none duration-500 transition ease-in-out'
                  : null
              }`}
              onClick={() => scrollToSlide(slideThree)}
            >
              Continue
              <HiOutlineArrowRight className="w-5 h-5 ml-2 duration-100 ease-in-out group-hover:ml-5" />
            </Button>
          </div>

          <div className="relative w-full h-full ml-auto mr-auto overflow-hidden md:h-1/2">
            <div
              className={`nft-image top-40 left-12  md:left-1/4 md:top-1/4 ${
                inSlideTwo
                  ? ' translate-x-8 delay-200  md:-translate-x-12 duration-700 transition ease-in-out md:-translate-y-5 -rotate-6'
                  : null
              }`}
            >
              <Image
                className="rounded-2xl"
                src={assets.img02}
                objectFit="cover"
                layout="fill"
              />
            </div>
            <div
              className={`nft-image bottom-32 left-48 md:left-1/3 md:top-1/4 ${
                inSlideTwo
                  ? ' -translate-y-10 md:-translate-y-7 md:-translate-x-1 duration-700 delay-200 transition ease-in-out rotate-1'
                  : null
              }`}
            >
              <Image
                className="rounded-2xl"
                src={assets.img03}
                objectFit="cover"
                layout="fill"
              />
            </div>
            <div
              className={`nft-image top-36 right-20 md:right-1/4 md:top-1/4  ${
                inSlideTwo
                  ? ' -translate-y-5 delay-200  -translate-x-10 md:translate-x-12 duration-700 transition ease-in-out rotate-12'
                  : null
              }`}
            >
              <Image
                className="rounded-2xl"
                src={assets.img04}
                objectFit="cover"
                layout="fill"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Third Slide */}
      <div className="bg-stack " ref={slideThree}>
        <Image
          src={assets.bg12}
          layout="fill"
          objectFit="cover"
          className="opacity-40"
        />
        <div className="flex flex-row items-center justify-between w-full h-full md:flex-col">
          <div
            ref={refSlideThree}
            className="relative w-3/5 mx-32 shadow-none md:mt-20 md:mb-5 h-96 rounded-2xl animate-pulse"
          >
            <Image
              className={`transition duration-700 ease-in-out rounded-2xl filter blur-md scale-50 delay-200 ${
                inSlideThree ? ' !scale-100 blur-none ' : null
              }`}
              src={assets.blockchain}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-full md:mb-10">
            <h3
              className={`mb-5  sm:mt-5 text-5xl font-bold text-center font-poppins   opacity-95 filter blur-md -translate-x-10 md:text-2xl px-10 ${
                inSlideThree
                  ? ' translate-x-0 blur-none duration-700 transition ease-in-out'
                  : null
              }`}
            >
              Interact with the{' '}
              <div className="w-full text-5xl font-extrabold text-transparent sm:text-3xl bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-300">
                Web3 Universe
              </div>
            </h3>
            <p
              className={`px-10 text-3xl w-full font-medium text-center md:text-xl mx-10 font-poppins sm:text-lg filter blur-md -translate-x-10 ${
                inSlideThree
                  ? ' translate-x-0 blur-none duration-700 transition ease-in-out'
                  : null
              }`}
            >
              Be the pioneers to be connected in UIT Decentralized Application
            </p>
            <Button
              color="light"
              pill
              className={`mt-20 md:mt-10 group opacity-95 filter blur-md translate-y-10 ${
                inSlideThree
                  ? ' translate-y-0 delay-200 blur-none duration-500 transition ease-in-out'
                  : null
              }`}
              onClick={() => scrollToSlide(slideFour)}
            >
              Continue
              <HiOutlineArrowRight className="w-5 h-5 ml-2 duration-100 ease-in-out group-hover:ml-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Fourth Slide */}
      <div className="bg-stack" ref={slideFour}>
        <Image
          src={assets.bg13}
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div
          ref={refSlideFour}
          className="flex flex-col items-center justify-start w-full h-full mt-60"
        >
          <h3
            className={`mb-10 text-5xl font-bold text-center font-poppins sm:text-xl md:text-3xl filter blur-md -translate-x-10 opacity-95 ${
              inSlideFour
                ? ' translate-x-0 blur-none duration-700 transition ease-in-out'
                : null
            }`}
          >
            Meet the{' '}
            <span className="text-5xl font-extrabold text-transparent md:text-4xl sm:text-xl bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-300">
              developer
            </span>
          </h3>
          <div className="flex flex-col items-center justify-center w-full minmd:pt-20">
            <div
              className={`relative z-10 w-48 h-48 md:w-28 md:h-28 bg-white border-4 border-white rounded-full overflow-hidden filter blur-md ${
                inSlideFour
                  ? ' blur-none duration-700 delay-200 transition ease-in-out'
                  : null
              }`}
            >
              <Image
                src={assets.leader}
                layout="fill"
                objectFit="cover"
                className="object-left-top transition-transform duration-500 ease-in-out rounded-full hover:scale-150"
              />
            </div>

            <div
              className={`absolute w-3/5 text-center bg-white bottom-28 md:bottom-40 minmd:bottom-60 h-72 md:h-64 opacity-95 border-white border-4 border-opacity-100 rounded-2xl filter blur-md translate-y-20 ${
                inSlideFour
                  ? ' !-translate-y-0  blur-none duration-700 delay-300 transition ease-in-out'
                  : null
              }`}
            >
              <p className="py-8 mt-24 text-4xl font-bold text-black border-b-2 md:mb-10 md:mt-16 font-poppins md:text-2xl">
                Phat Luu
              </p>
              <div className="flex flex-row justify-between w-full px-20 my-5 md:px-5">
                <Link href="https://www.linkedin.com/in/phatluucodevippro/">
                  <BsLinkedin className="social-media-icon" />
                </Link>
                <Link href="https://www.facebook.com/phattruonglao">
                  <BsFacebook className="social-media-icon" />
                </Link>
                <Link href="https://t.me/lolio02">
                  <BsTelegram className=" social-media-icon" />
                </Link>
                <Link href="https://github.com/lhphat02" className="">
                  <BsGithub className="social-media-icon" />
                </Link>
                <Link href="https://www.instagram.com/phatluuuu/">
                  <BsInstagram className="social-media-icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutUS;
