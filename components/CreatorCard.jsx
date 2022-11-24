import Image from 'next/image';

import images from '../assets';

const CreatorCard = (props) => (
  <div className="dark:hover:bg-prim-black-3 dark:bg-prim-black-1 bg-prim-gray-1 hover:shadow-xl hover:cursor-pointer rounded-2xl p-2 w-150 flex flex-col scroll m-5 mx-1 md:w-72 sm:w-52  w-64 shadow-md">
    <div className="w-8 h-8 md:w-6 md:h-6 md:text-xs p-1 rounded-full prim-gradient flex justify-center items-center mt-2 ml-2">
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
          <div className="absolute right-0 bottom-0 w-5 h-5 md:w-4 md:h-4">
            <Image src={images.tick} alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center my-4 font-poppins md:text-sm">
        <p className="dark:text-white text-prim-black-3 mb-2 font-semibold text-lg">
          {props.name}
        </p>
        <p className="dark:text-white text-prim-black-3">{props.address}</p>
      </div>
    </div>
  </div>
);

export default CreatorCard;
