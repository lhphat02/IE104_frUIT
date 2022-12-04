import React from 'react'
import { useEffect, useState, useContext } from 'react';
import Image from 'next/image';

import { Context } from '../context/Context';
import { shortenAddress } from '../utils/shortenAddress';
import images from '../assets';


const NFT_Collection = () => {
  const { fetchCollectionOrListed, currentAccount } = useContext(Context);
  const [ nftItems, setnftItems] = useState([]);
  

  /*useEffect(() => {
      fetchCollectionOrListed('fetchNFT_Collection').then ((items)=> {
      setnftItems(items);
    });
  
  },[]);*/


  return (
    <div className="flex flex-col justify-start items-center h-full min-h-full">
      <div className="flex flex-col justify-center items-center">
 
        <div className="z-0 flex-col mt-20 flex justify-center items-center">
          <div className="w-40 h-40 p-1 rounded-full flex justify-center items-center sm:h-36 bg-prim-black-2">
            <Image
              src={images.creator1}
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
}

export default NFT_Collection