import React, {useState,useContext,useEffect}from 'react';

import {Context} from '../context/Context';

import { NFTCard } from '../components/NFTCard';

const ListedNFT = () => {
    const {fecthCollectionOrListed}=useContext(Context);
    const [nftItems,setNftItems]=useState([]);

    useEffect(() =>{
        fecthCollectionOrListed().then((items)=>{
            setNftItems(items);
        });
    },[]);

    return(
        <div className="flex justify-center min-h-screen p-12 sm:px-4">
        <div className="w-full minmd:w-4/5">
          <div className="mt-4">
            <h2 className="mt-2 ml-4 text-2xl font-semibold font-poppins dark:text-white text-nft-black-1 sm:ml-2">
              NFTs Listed for Sale
            </h2>
            <div className="flex flex-wrap justify-start w-full mt-3 md:justify-center">
              {nftItems.map((nft) => (
                <NFTCard key={`nft-${nft.tokenId}`} nft={nft} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default ListedNFT;
