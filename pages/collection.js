import React from 'react';
import { useEffect, useState, useContext } from 'react';
import Image from 'next/image';

import { Context } from '../context/Context';
import { shortenAddress } from '../utils/shortenAddress';
import assets from '../assets';
import Loading from '../components/Loading';
import NFTCard from '../components/NFTCard';

const NFT_Collection = () => {
  const { fetchCollectionOrListed, currentAccount } = useContext(Context);
  const [nftItems, setNftItems] = useState([]);

  useEffect(() => {
    fetchCollectionOrListed().then((items) => {
      setNftItems(items);
    });
  }, []);

  return (
    <>
      <div className="relative flex flex-col items-center justify-start ">
        {/*Banner*/}
        <div className="relative w-full h-80">
          <Image
            src={assets.bg}
            className="w-full "
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/*Avatar*/}
        <div className="absolute flex flex-col items-center justify-center -bottom-36">
          <div className="flex items-center justify-center border-8 border-white rounded-full sm:w-36 dark:border-prim-dark">
            <Image
              src={assets.creator}
              className="rounded-full "
              objectFit="cover"
              width={200}
              height={200}
            />
          </div>
          <p className="mt-3 text-2xl font-semibold font-poppins">
            {shortenAddress(currentAccount)}
          </p>
        </div>
      </div>

      <p className="mt-48 mb-12 text-3xl font-bold ml-30 sm:ml-14 dark:text-white">
        Your NFTs
      </p>
      {!Loading ? (
        <Loading />
      ) : // Check if there's any NFT on market
      nftItems.length ? (
        //    Xài grid tiện hơn flex
        <div className="grid w-full grid-cols-1 gap-8 mt-3 mb-20 ml-30 mobile:grid-cols-2 note:grid-cols-3 tablet:grid-cols-4 laptop:grid-cols-5 ">
          {nftItems.map((nft) => (
            <NFTCard key={nft.tokenId} nft={nft} onCollectionPage />
          ))}
        </div>
      ) : (
        <h1 className="mt-5 text-3xl font-normal text-prim-gray-2 font-poppins minmd:text-4xl xs:ml-0">
          There is no NFT in your collection
        </h1>
      )}
    </>
  );
};

export default NFT_Collection;
