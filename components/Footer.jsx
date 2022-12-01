import Image from 'next/image';
import { useTheme } from 'next-themes';

import images from '../assets';
import Button from './Button';

const FooterLink = ({ heading, items }) => (
  <div className="text-black sm:mx-4 dark:text-prim-gray-1">
    <h3 className="mb-6 text-lg font-semibold font-poppins ">{heading}</h3>
    {items.map((item, index) => (
      <p
        key={index}
        className="my-4 font-normal hover:cursor-pointer font-poppins dark:text-prim-gray-1 dark:hover:text-prim-blue hover:text-prim-pink"
      >
        {item}
      </p>
    ))}
  </div>
);
const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className="flex flex-col py-8 bg-white border-t md:px-4 border-prim-gray-1 dark:bg-prim-dark dark:border-prim-black-1">
      {/* ===================Footer UpperSecTion=================== */}
      <div className="flex flex-row justify-between md:flex-col">
        {/* ===================Left Column=================== */}
        <div className="ml-32 md:ml-0">
          {/* ===================Brand=================== */}
          <div className="flex items-center justify-start md:ml-2">
            <Image
              src={images.logo}
              objectFit="contain"
              width={32}
              height={32}
              alt="logo"
            />

            <p className="ml-2 text-lg font-bold text-black dark:text-prim-gray-1">
              frUIT
            </p>
          </div>

          {/* ===================Get Email=================== */}
          <div className="mt-10">
            <p className="flex mb-5 text-lg font-semibold text-black font-poppins dark:text-prim-gray-1 md:ml-2">
              Get the latest updates
            </p>

            <div className="flex border rounded-md md:justify-center md:w-full w-80 dark:border-prim-black-2">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full h-10 p-3 text-lg font-normal outline-none md:text-sm dark:bg-prim-black-2"
              />
              <Button
                btnName="Submit"
                classStyles="rounded-md h-10 text-white"
              />
            </div>
          </div>
        </div>

        {/* ===================Right Column=================== */}
        <div className="flex justify-between md:flex-row md:mt-8">
          <div className="text-sm dark:text-prim-gray-1 mr-60 md:mr-0 md:ml-20 sm:ml-5">
            <FooterLink
              heading="frUIT"
              items={['Explore', 'How its work', 'Contact Us']}
            />
          </div>
          <div className="text-sm mr-52 dark:text-prim-gray-1 md:mr-20 sm:mr-5">
            <FooterLink
              heading="Team 5"
              items={[
                'Luu Huynh Phat',
                'Nguyen Van Chon',
                'Nguyen Minh Quan',
                'Hoang Tuan Anh',
                'Nguyen Ngoc Mai Khanh',
              ]}
            />
          </div>
        </div>
      </div>

      {/* ===================Footer LowerSecTion=================== */}
      <div className="flex flex-row justify-between mx-32 mt-3 border-t-2 sm:flex-col dark:bg-prim-dark pt-7 dark:border-prim-black-3">
        <p className="flex font-semibold text-black sm:justify-center font-poppins text-md sm:text-xs dark:text-prim-gray-1 md:ml-10 sm:ml-0">
          frUIT, Inc. All Rights Reserved
        </p>

        <div className="flex flex-row mr-10 sm:justify-center sm:mr-0 sm:mt-4">
          {[
            images.instagram,
            images.twitter,
            images.telegram,
            images.discord,
            images.facebook,
          ].map((image, index) => (
            <div key={index} className="mx-3 md:mx-2 hover:cursor-pointer">
              <Image
                src={image}
                objectFit="contain"
                width={25}
                height={25}
                alt="social"
                className={`${theme === 'light' && 'filter invert'}`}
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
