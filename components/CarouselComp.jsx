import { Carousel } from 'flowbite-react';
import Image from 'next/image';

import images from '../assets';

const CarouselComp = () => {
  return (
    <div className="relative mb-10 h-44 xl:h-96 pc:h-300 minmd:h-500">
      <div className="absolute z-10 w-full h-full bg-black rounded-lg bg-opacity-40" />
      <Carousel indicators={false} leftControl=" " rightControl=" ">
        <Image
          src={images.bg5}
          alt="from UIT NFT Banner 1"
          placeholder="blur"
          loading="lazy"
        />
        <Image
          src={images.bg6}
          alt="from UIT NFT Banner 2"
          placeholder="blur"
          loading="lazy"
        />
        <Image
          src={images.bg7}
          alt="from UIT NFT Banner 3"
          placeholder="blur"
          loading="lazy"
        />
        <Image
          src={images.bg8}
          alt="from UIT NFT Banner 4"
          placeholder="blur"
          loading="lazy"
        />
        <Image
          src={images.bg9}
          alt="from UIT NFT Banner 5"
          placeholder="blur"
          loading="lazy"
        />
      </Carousel>
    </div>
  );
};

export default CarouselComp;
