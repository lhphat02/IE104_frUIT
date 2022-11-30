import Link from 'next/link';

import Image from 'next/image';
import React from 'react';

import { shortenAddress } from '../utils/shortenAddress';

const NFTCard = ({ nft, onProfilePage }) => {
  return (
    <Link href={{ pathname: '/nft-detail', query: nft }}>
      <div className="w-56 p-3 shadow-lg cursor-pointer bg-prim-gray-1 sm:w-full dark:bg-prim-black-3 minmd:w-64 rounded-2xl sm:mx-2">
        <div className="relative w-full overflow-hidden h-52 sm:h-44 xs:h-56 rounded-xl">
          <Image
            src={nft.image}
            objectFit="cover"
            layout="fill"
            alt={`nft${nft.id}`}
            className="duration-200 ease-in hover:scale-110"
          />
        </div>
        <div className="flex flex-col mt-3">
          <p className="text-sm font-semibold font-poppins dark:text-white text-prim-black-1">
            {nft.name}
          </p>
          <div className="flex flex-row justify-between mt-1 xs:flex-col xs:items-start xs:mt-3">
            <p className="text-xs font-semibold font-poppins">
              {nft.price} <span className="font-normal">ETH</span>
            </p>
            <p className="text-xs font-semibold font-poppins">
              {shortenAddress(onProfilePage ? nft.owner : nft.seller)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NFTCard;
