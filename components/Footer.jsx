import Image from 'next/image';

import images from '../assets';
import Button from './Button';

const FooterLink = ({ heading, items }) => (
  <div className="sm:mx-4 text-black">
    <h3 className="text-sm font-semibold font-poppins mb-8 ">
      {heading}
    </h3>
    {items.map((item, index) => (
      <p
        key={index}
        className="hover:cursor-pointer font-poppins font-normal my-4 hover:text-prim-black-1"
      >
        {item}
      </p>
    ))}
  </div>
);
const Footer = () => {
  

  return(
    <footer className="flex justify-center items-center flex-col border-t bg-white border-prim-gray-1 sm:py-4 py-8 w-full ">
    
     {/* ===================Footer UpperSecTion=================== */}
    <div className="w-full minmd:w-4/5 flex flex-row md:flex-col sm:px-4 px-10">

    {/* ===================Left Column=================== */}
    <div className="flex justify-start items-start flex-row">

  {/* ===================Brand=================== */}
    <div className="flex justify-between items-center ml-4">
    
    <Image
      src={images.logo}
      objectFit="contain"
      width={32}
      height={32}
      alt="logo"/>

    <p className="font-semibold text-md ml-1 text-black">
        FrUIT
    </p>
    </div>

   {/* ===================Get Email=================== */}
    <p className="font-poppins font-semibold mt-10 ml-2 text-sm text-black">Get the latest updates</p>
    <div className="flex justify-center items-start flex-row md:w-full minlg:w-200 w-50 mt-20 bg-white border border-prim-gray-2 rounded-md  ">
    <input
      type="email"
      placeholder="Your Email"
      className="h-full flex-1 w-full font-normal text-xs minlg:text-lg outline-none pl-2 rounded-md"
    />
    <div className="flex-initial text-black">
    <Button
      btnName="Email Me"
      classStyles="rounded-md h-7"
    />
    </div>
    </div>

  

{/* ===================Right Column=================== */}
  <div className=" flex justify-center items-start ml-80 md:ml-10 md:mt-4 text-xs">
  <FooterLink heading="FrUIT" items={['Explore', 'How its work', 'Contact Us']} />
  </div>
  <div className="flex justify-end items-end ml-80 md:ml-10 md:mt-4 text-xs">
  <FooterLink heading="Team 5" items={['Luu Huynh Phat','Nguyen Van Chon','Nguyen Minh Quan','Nguyen Ngoc Mai Khanh','Hoang Tuan Anh']} />
  </div>

  </div>
  </div>
  <span className="bg-prim-gray-1 w-full">
  <div className="flex flex-row justify-between">
  <div className="mt-1 ml-10"> 
  <p className="font-poppins font-semibold text-xs text-black ">FrUIT, Inc. All Rights Reserved</p>
  </div>
  
  <div className="flex justify-around mr-20">
  {[images.instagram, images.twitter, images.telegram, images.discord, images.facebook].map(
    (image, index) => (
        
        <Image
          key={index}
          src={image}
          objectFit="contain"
          width={25}
          height={25}
          alt="social"
         
        />
      
    ),
  )}
  </div>
  </div>
  </span>    
  </footer>
    );
}

export default Footer

