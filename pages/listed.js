import React, { useState, useContext, useEffect } from 'react';

import { Context } from '../context/Context';

import NFTCard from '../components/NFTCard';

import Loading from '../components/Loading';
import SearchBar from '../components/Searchbar';

const ListedNFT = () => {
  const { fetchCollectionOrListed, loading, setLoading } = useContext(Context);
  const [nftItems, setNftItems] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  useEffect(() => {
    fetchCollectionOrListed('fetchListed').then((items) => {
      setNftItems(items);
      setLoading(false);
    });
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };
  
  const filteredNFT = nftItems.filter((nft) => {
    return nft.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return (
    <div className="flex flex-col justify-center w-full p-10 mt-10 mb-60 xs:p-6 minmd:px-60 pc:px-28">
      <p className="mb-10 text-3xl font-bold dark:text-white">
        Your listed NFTs
      </p>
      <div className='mb-10'>
            <SearchBar 
              placeholder="Search NFT here"
              searchChange={onSearchChange}
            />
      </div>
      {loading ? (
        <Loading />
      ) : // Check if there's any listing NFT
      nftItems.length ? (
        <div className="grid w-full grid-cols-1 gap-8 mb-20 mobile:grid-cols-2 note:grid-cols-3 tablet:grid-cols-4 laptop:grid-cols-5">
          {filteredNFT.map((nft) => (
            <NFTCard key={nft.tokenId} nft={nft} />
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
