import React, { useState, useContext, useEffect } from 'react';

import Image from 'next/image';
import assets from '../assets';

import { Context } from '../context/Context';

import NFTCard from '../components/NFTCard';

import Loading from '../components/Loading';
import SearchBar from '../components/Searchbar';
import Modal from '../components/Modal';
import Button from '../components/Button';

const ListedNFT = () => {
  const { fetchCollectionOrListed, logIn, loading, connectWallet, setLoading } =
    useContext(Context);
  const [nftItems, setNftItems] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  useEffect(() => {
    fetchCollectionOrListed('fetchListed').then((items) => {
      setNftItems(items);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!logIn) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [logIn]);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredNFT = nftItems.filter((nft) => {
    return nft.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return (
    <>
      <div className="relative w-full h-80 sm:h-48">
        <Image
          src={assets.bg4}
          className="w-full "
          layout="fill"
          objectFit="cover"
        />
        <div className="flex items-center px-10 h-72 sm:h-52 xs:h-48 rounded-3xl">
          <p className="z-10 w-full text-5xl font-bold text-center text-white md:text-4xl sm:text-3xl xs:text-xl">
            CHECK YOUR SELLING NFTS HERE
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center w-full p-10 mt-10 mb-60 xs:p-6 minmd:px-60 pc:px-28">
        <p className="mb-10 text-3xl font-bold dark:text-white">
          Your listed NFTs
        </p>
        <div className="mb-10">
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
      {!logIn && (
        <Modal
          closeBtn={false}
          header={
            <p className="my-2 font-bold">
              Oops, can&#39;t find your collection 😥
            </p>
          }
          body={
            <div className="text-center">
              <p className="text-lg font-poppins">
                Please sign in to get access to your personal listing NFTs
              </p>
            </div>
          }
          footer={
            <div className="flex justify-center ">
              <Button
                btnName="Connect now"
                classStyles={`mx-2 rounded-xl active:scale-110 duration-100 `}
                handleClick={() => {
                  connectWallet();
                }}
              />
            </div>
          }
          handleClose={() => {}}
        />
      )}
    </>
  );
};

export default ListedNFT;
