import { Carousel } from 'flowbite-react';
import Image from 'next/image';

import images from '../assets';

const CarouselComp = () => {
  return (
    <div className="relative mb-10 h-44 xl:h-96 pc:h-300 minmd:h-500">
      <div className="absolute z-10 w-full h-full bg-black rounded-lg bg-opacity-40" />
      <Carousel leftControl=" " rightControl=" ">
        <Image src={images.bg5} />
        <Image src={images.bg6} />
        <Image src={images.bg7} />
        <Image src={images.bg8} />
        <Image src={images.bg9} />
      </Carousel>
    </div>
  );
};

export default CarouselComp;
