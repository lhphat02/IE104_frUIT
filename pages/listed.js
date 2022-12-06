import React, {useState,useContext,useEffect} from 'react';

import {Context} from '../context/Context';

import NFTCard  from '../components/NFTCard';

import Loading from '../components/Loading'

const ListedNFT = () => {
    const {fetchCollectionOrListed}=useContext(Context);
    const [nftItems,setNftItems]=useState([]);

    useEffect(() =>{
        fetchCollectionOrListed('fetchListed').then((items)=>{
            setNftItems(items);
        });
    },[]);

    return(
      <div className="flex flex-col justify-center w-full p-10 mt-36 xs:p-6 minmd:px-60 pc:px-28">
        <p className="mb-10 text-3xl font-bold dark:text-white">Your listed NFTs</p>
        {!Loading ? (
          <Loading />
        ) : // Check if there's any NFT on market
        nftItems.length ? (
          <div className="grid w-full grid-cols-1 gap-8 mb-20 mobile:grid-cols-2 note:grid-cols-3 tablet:grid-cols-4 laptop:grid-cols-5">
            {nftItems.map((nft) => (
              <NFTCard key={nft.tokenId} nft={nft}/>
            ))}
          </div>
        ) : (
          <h1 className="mt-5 text-3xl font-normal text-prim-gray-2 font-poppins minmd:text-4xl xs:ml-0">
            There is no NFT listed
          </h1>
        )}
        
      </div>
    );
};

export default ListedNFT;
