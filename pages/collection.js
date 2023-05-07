import React, { useEffect, useState, useContext } from 'react';

import Image from 'next/legacy/image';

import { Context } from '../context/Context';
import { shortenAddress } from '../utils/shortenAddress';
import assets from '../assets';
import Loading from '../components/Loading';
import NFTCard from '../components/NFTCard';
import SearchBar from '../components/Searchbar';
import Modal from '../components/Modal';
import Button from '../components/Button';

// hàm kiểm tra trước khi đưa dữ liệu cho trang Collection hay trang Listed
const NFTCollection = () => {
  const { fetchCollectionOrListed, currentAccount, connectWallet, logIn } =
    useContext(Context);
  const [nftItems, setNftItems] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  // sử dụng useEffect để load dữ liệu
  useEffect(() => {
    fetchCollectionOrListed().then((items) => {
      setNftItems(items);
    });
  }, []);
  // dùng [] để tránh render lại

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredNFT = nftItems.filter((nft) => {
    return nft.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return (
    <>
      <div className="relative flex flex-col items-center justify-start ">
        {/* Banner */}
        <div className="relative w-full h-80 sm:h-48">
          <Image
            src={assets.bg}
            className="w-full "
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Avatar */}
        <div className="absolute flex flex-col items-center justify-center -bottom-36 sm:-bottom-28">
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
      {/* Searchbar */}
      <div className="flex flex-col justify-center w-full p-10 mt-36 xs:p-6 minmd:px-60 pc:px-28">
        <h1 className="mb-10 text-3xl font-bold dark:text-white">Your NFTs</h1>
        <div className="mb-10">
          <SearchBar
            placeholder="Search NFT here"
            searchChange={onSearchChange}
          />
        </div>
        {!Loading ? (
          <Loading />
        ) : // Check if there's any NFT on market
        nftItems.length ? (
          <div className="grid w-full grid-cols-1 gap-8 mb-20 mobile:grid-cols-2 note:grid-cols-3 tablet:grid-cols-4 laptop:grid-cols-5">
            {filteredNFT.map((nft) => (
              <NFTCard key={nft.tokenId} nft={nft} onCollectionPage />
            ))}
          </div>
        ) : (
          <h1 className="mt-5 text-3xl font-normal text-prim-gray-2 font-poppins minmd:text-4xl xs:ml-0">
            There is no NFT in your collection
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
                Please sign in to get access to your personal NFT collection
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
        />
      )}
    </>
  );
};

export default NFTCollection;
