import React from 'react';
import { useEffect, useState, useContext } from 'react';
import Image from 'next/image';

import { Context } from '../context/Context';
import { shortenAddress } from '../utils/shortenAddress';
import assets from '../assets';

const NFT_Collection = () => {
  const { fetchCollectionOrListed, currentAccount } = useContext(Context);
  const [nftItems, setNftItems] = useState([]);

  useEffect(() => {
    fetchCollectionOrListed().then((items) => {
      setNftItems(items);
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-start h-full min-h-full">
      <div className="flex flex-col items-center justify-center">
        <div className="z-0 flex flex-col items-center justify-center mt-20">
          <div className="flex items-center justify-center w-40 h-40 p-1 rounded-full sm:h-36 bg-prim-black-2">
            <Image
              src={assets.creator1}
              className="object-cover rounded-full"
            />
          </div>
          <p className="mt-6 text-2xl font-semibold font-poppins dark:text-white text-prim-black-1">
            {shortenAddress(currentAccount)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NFT_Collection;
