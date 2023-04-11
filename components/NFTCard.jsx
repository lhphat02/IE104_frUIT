import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/legacy/image';
import React, { useContext } from 'react';

import { Button } from 'flowbite-react';
import { shortenAddress } from '../utils/shortenAddress';
import { Context } from '../context/Context';

const NFTCard = ({ nft, onCollectionPage }) => {
  const routing = useRouter();
  const { hideContent, sethideContent } = useContext(Context);

  return (
    // Get NFT's query string
    <div className={`flex flex-col ${hideContent ? 'hidden' : null}`}>
      <Link href={{ pathname: '/nft-detail', query: nft }}>
        <div className="flex flex-col w-full p-3 shadow-lg cursor-pointer bg-prim-gray-1 dark:bg-prim-black-3 rounded-2xl">
          <div className="relative w-full overflow-hidden h-52 sm:h-44 xs:h-56 rounded-xl">
            <Image
              src={nft.image}
              objectFit="cover"
              layout="fill"
              alt={`nft${nft.id}`}
              className="duration-300 ease-in-out hover:scale-110"
            />
          </div>
          <div className="flex flex-col mt-3">
            <p className="text-sm font-semibold font-poppins dark:text-white text-prim-black-1">
              {nft.name}
            </p>
            <div className="flex flex-row justify-between mt-1 xs:flex-col xs:items-start xs:mt-3">
              <p className="overflow-hidden text-xs font-semibold font-poppins">
                {nft.price} <span className="font-normal">ETH</span>
              </p>

              <p className="text-xs font-semibold font-poppins ">
                {shortenAddress(onCollectionPage ? nft.owner : nft.seller)}
              </p>
            </div>
          </div>
        </div>
      </Link>
      <Button
        className={`mt-5 ${routing.pathname !== '/admin' ? 'hidden' : null}`}
        onClick={() => {
          sethideContent(true);
        }}
      >
        Delete
      </Button>
    </div>
  );
};

export default NFTCard;
