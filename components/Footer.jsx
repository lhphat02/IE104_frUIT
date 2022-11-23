import Image from 'next/image';
import { useTheme } from 'next-themes';

import images from '../assets';
import Button from './Button';

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
    <footer className="flex flex-col border-t 
                    bg-white border-prim-gray-1 py-8
                    dark:bg-prim-dark dark:border-prim-black-1">
      {/* ===================Footer UpperSecTion=================== */}
      <div className="flex flex-row md:flex-col justify-between">

          {/* ===================Left Column=================== */}
          <div className="ml-32  md:ml-0">
            {/* ===================Brand=================== */}
            <div className="flex justify-start md:ml-2">
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
              <p className="flex font-poppins font-semibold text-lg mb-5 text-black dark:text-prim-gray-1 md:ml-2">
                Get the latest updates
              </p>

              <div className="flex md:justify-center md:w-full w-80 border dark:border-prim-black-2 rounded-md">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="h-10 w-full font-normal md:text-sm text-lg outline-none p-3 dark:bg-prim-black-2"
                />
                <Button
                  btnName="Submit"
                  classStyles="rounded-md h-10 text-white"
                />
              </div>
            </div>
          </div>

          {/* ===================Right Column=================== */}
          <div className='flex md:flex-row justify-between md:mt-8'>
            <div className="text-sm dark:text-prim-gray-1 mr-60 md:mr-0 md:ml-20 sm:ml-5">
              <FooterLink
                heading="frUIT"
                items={['Explore', 'How its work', 'Contact Us']}
              />
            </div>
            <div className="text-sm dark:text-prim-gray-1 mr-48 md:mr-20 sm:mr-5">
              <FooterLink
                heading="Team 5"
                items={[
                  'Luu Huynh Phat',
                  'Nguyen Van Chon',
                  'Nguyen Minh Quan',
                  'Nguyen Ngoc Mai Khanh',
                  'Hoang Tuan Anh',
                ]}
              />
            </div>
          </div>
      </div>

      {/* ===================Footer LowerSecTion=================== */}
      <div className="flex flex-row sm:flex-col justify-between
                    dark:bg-prim-dark mt-3 pt-7 border-t-2 dark:border-prim-black-3">
            <p className="flex sm:justify-center font-poppins font-semibold text-md sm:text-xs
                        text-black dark:text-prim-gray-1 md:ml-10 ml-10 sm:ml-0">
              frUIT, Inc. All Rights Reserved
            </p>

          <div className="flex flex-row sm:justify-center mr-10 sm:mr-0 sm:mt-4">
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
