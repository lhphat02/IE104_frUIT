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
    <div className="relative flex flex-col justify-start items-center ">
    {/*Banner*/}
      <div className='relative w-full h-80'>
      <Image
            src={assets.bg}
            className="w-full "
            layout='fill'
            objectFit='cover'
           
          />
      </div>

    {/*avatar*/}
      <div className='flex justify-center flex-col items-center z-10 absolute -bottom-40'>
        <div className="flex justify-center items-center rounded-full sm:w-36 border-8 dark:border-prim-dark border-white">
          <Image
            src={assets.creator1}
            className="rounded-full "
            objectFit='cover'
            width={200}
            height={200}
          />
        </div>
        <p className="mt-3 text-2xl font-semibold font-poppins">
          {/*{shortenAddress(currentAccount)}*/}
          Phat Luu
        </p>
      </div>
    </div>

    <p className="my-6 text-3xl font-bold ml-30 sm:ml-14 dark:text-white text-prim-black-3 mt-48">
    Your NFTs
    </p>
    {!Loading ? (
      <Loading />
      ) : // Check if there's any NFT on market
      nftItems.length ? (
    //    Xài grid tiện hơn flex
        <div className="grid w-full grid-cols-1 gap-8 mt-3 ml-30 mb-20 mobile:grid-cols-2 note:grid-cols-3 tablet:grid-cols-4 laptop:grid-cols-5 ">
        {nftItems.map((nft) => (
        <NFTCard key={nft.tokenId} nft={nft} />
         ))}
    </div>
    ) : (
      <h1 className="mt-5 text-3xl font-normal text-prim-gray-2 font-poppins minmd:text-4xl xs:ml-0">
        There is no NFT on your collection
      </h1>
    )}
    </>
  );
};

export default NFT_Collection;
