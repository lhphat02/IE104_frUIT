import Image from "next/image";
import { useTheme } from "next-themes";

import images from "../assets";
import Button from "./Button";

const FooterLink = ({ heading, items }) => (
  <div className="sm:mx-4 text-black dark:text-prim-gray-1">
    <h3 className="text-lg font-semibold font-poppins mb-6 ">{heading}</h3>
    {items.map((item, index) => (
      <p
        key={index}
        className="hover:cursor-pointer font-poppins font-normal my-4 dark:text-prim-gray-1 dark:hover:text-prim-blue hover:text-prim-pink"
      >
        {item}
      </p>
    ))}
  </div>
);
const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className="flex justify-center items-center flex-col border-t bg-white border-prim-gray-1 sm:py-4 py-8 w-full dark:bg-prim-dark dark:border-prim-black-1 ">
      {/* ===================Footer UpperSecTion=================== */}
      <div className="w-full minmd:w-4/5 flex flex-row md:flex-col sm:px-4 px-10">
        <div className="w-full flex justify-between items-start flex-row">

          {/* ===================Left Column=================== */}
          <div className="ml-10">
            {/* ===================Brand=================== */}
            <div className="flex justify-start items-center">
              <Image
                src={images.logo}
                objectFit="contain"
                width={32}
                height={32}
                alt="logo"
              />

              <p className="font-bold text-lg text-black dark:text-prim-gray-1 ml-2">
                frUIT
              </p>
            </div>

            {/* ===================Get Email=================== */}
            <div className="mt-10">
              <p className="flex font-poppins font-semibold text-lg mb-5 text-black dark:text-prim-gray-1">
                Get the latest updates
              </p>

              <div className="flex justify-between w-80 md:w-full minlg:w-50 border dark:border-prim-black-2 rounded-md">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="h-10 w-full font-normal text-sm minlg:text-lg outline-none p-3 dark:bg-prim-black-2"
                />
                <Button 
                  BtnName="Submit" 
                  classStyles="rounded-md h-10 text-white text-md" />
              </div>
            </div>

          </div>

          {/* ===================Right Column=================== */}
          <div className="flex-row justify-end flex">
            <div className="flex mr-60 md:mt-4 text-sm dark:text-prim-gray-1">
              <FooterLink
                heading="frUIT"
                items={["Explore", "How its work", "Contact Us"]}
              />
            </div>
            <div className="flex mr-60 md:mt-2 text-sm dark:text-prim-gray-1">
              <FooterLink
                heading="Team 5"
                items={[
                  "Luu Huynh Phat",
                  "Nguyen Van Chon",
                  "Nguyen Minh Quan",
                  "Nguyen Ngoc Mai Khanh",
                  "Hoang Tuan Anh",
                ]}
              />
            </div>
          </div>

        </div>
      </div>

      {/* ===================Footer LowerSecTion=================== */}
      <div className="dark:bg-prim-dark w-full mt-3 pt-5 border-t-2 dark:border-prim-black-3 md:ml-10">
        <div className="flex flex-row justify-between">
          <div className="mt-1 ml-20">
            <p className="font-poppins font-semibold text-md text-black dark:text-prim-gray-1 ">
              frUIT,  Inc. All Rights Reserved
            </p>
          </div>

          <div className="flex mr-60">
            {[
              images.instagram,
              images.twitter,
              images.telegram,
              images.discord,
              images.facebook,
            ].map((image, index) => (
              <div key={index} className="mx-3 hover:cursor-pointer">
                <Image
                  src={image}
                  objectFit="contain"
                  width={25}
                  height={25}
                  alt="social"
                  className={`${theme === "light" && "filter invert"}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
