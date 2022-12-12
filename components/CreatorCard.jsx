import Image from 'next/image';

import images from '../assets';

const CreatorCard = (props) => (
  <div className="flex flex-col w-56 p-2 m-5 mx-1 shadow-md dark:hover:bg-prim-black-3 dark:bg-prim-black-1 bg-prim-gray-1 hover:shadow-xl hover:cursor-pointer rounded-2xl scroll md:w-60 sm:w-72 galaxyfold:w-64">
    <div className="flex items-center justify-center w-8 h-8 p-1 mt-2 ml-2 rounded-full md:w-6 md:h-6 md:text-xs prim-gradient">
      <p className="font-semibold text-white">{props.number}</p>
    </div>

    <div className="flex flex-col items-center ">
      <div className="p-1 md:p-0.5 bg-gradient-to-tr from-prim-blue to-prim-pink rounded-full flex items-center justify-center">
        <div className="relative w-20 h-20 md:w-14 md:h-14">
          <Image
            className="rounded-full"
            src={props.imageCard}
            alt=""
            objectFit="cover"
            layout="fill"
          />
          <div className="absolute bottom-0 right-0 w-5 h-5 md:w-4 md:h-4">
            <Image src={images.tick} alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center my-4 font-poppins md:text-sm">
        <p className="mb-2 text-lg font-semibold dark:text-white text-prim-black-3">
          {props.name}
        </p>
        <p className="dark:text-white text-prim-black-3">{props.address}</p>
      </div>
    </div>
  </div>
);

export default CreatorCard;
