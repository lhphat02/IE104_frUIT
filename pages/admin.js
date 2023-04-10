import React, { useContext, useEffect, useState } from 'react';
import Loading from '../components/Loading';
import { Context } from '../context/Context';
import SearchBar from '../components/Searchbar';
import NFTCard from '../components/NFTCard';

const Admin = () => {
  const { fetchExistingMarketItem, loading, setLoading } = useContext(Context);
  const [nftItems, setNftItems] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  useEffect(() => {
    fetchExistingMarketItem().then((items) => {
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
    <div className="h-screen">
      <h1 className="pt-20 text-3xl font-bold text-center font-poppins">
        Admin Dashboard (Beta - Not worked)
      </h1>
      <div className="p-20">
        <div className="flex flex-row justify-between my-4 sm:flex-col">
          <p className="my-6 text-3xl font-bold dark:text-white text-prim-black-3">
            NFTs on Market
          </p>
          <div className="sm:mb-5 sm:flex sm:justify-center">
            <SearchBar
              placeholder="Search NFT here"
              searchChange={onSearchChange}
            />
          </div>
        </div>
        {loading ? (
          <Loading />
        ) : // Check if there's any NFT on market
        nftItems.length ? (
          //    Xài grid tiện hơn flex
          <div className="grid w-full grid-cols-1 gap-8 mt-3 mobile:grid-cols-2 note:grid-cols-3 tablet:grid-cols-4 laptop:grid-cols-5 ">
            {filteredNFT.map((nft) => (
              <NFTCard key={nft.tokenId} nft={nft} />
            ))}
          </div>
        ) : (
          <h1 className="mt-5 text-3xl font-normal text-prim-gray-2 font-poppins minmd:text-4xl xs:ml-0">
            There is no NFT on market
          </h1>
        )}
      </div>
    </div>
  );
};

export default Admin;
