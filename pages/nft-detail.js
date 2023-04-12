import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/legacy/image';
import { useTheme } from 'next-themes';

import { Tooltip } from 'flowbite-react';
import { NextSeo } from 'next-seo';
import { shortenAddress } from '../utils/shortenAddress';
import { Context } from '../context/Context';
import assets from '../assets';
import Button from '../components/Button';
import Loading from '../components/Loading';
import Modal from '../components/Modal';

const NFTdetail = () => {
  const { buyNFT, currentAccount, loading, setLoading } = useContext(Context);
  const router = useRouter();
  const { theme } = useTheme();
  const [paymentModal, setPaymentModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [nft, setNft] = useState({
    price: '',
    tokenId: '',
    id: '',
    seller: '',
    owner: '',
    image: '',
    name: '',
    description: '',
    tokenURI: '',
  });

  useEffect(() => {
    // Waiting data to be loaded
    if (!router.isReady) return;
    // Parse NFT query string into object
    setNft(router.query);
  }, [router.isReady]);

  useEffect(() => {
    if (paymentModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [paymentModal]);

  useEffect(() => {
    if (successModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [successModal]);

  const checkout = async () => {
    setLoading(true);
    await buyNFT(nft);
    setLoading(false);
    setPaymentModal(false);
    setSuccessModal(true);
  };

  return (
    <>
      <NextSeo
        title={nft.name}
        description={`from UIT NFT #${nft.id} - ${nft.description}`}
        openGraph={{
          type: 'product.item',
          url: `https://www.fromuitnft.online${router.asPath}`,
          images: {
            url: `${nft.image}`,
            width: 800,
            height: 800,
            alt: `${nft.name}`,
          },
          site_name: `${nft.name}`,
        }}
      />

      <div className="flex justify-center my-8 md:flex-col">
        {/* =================Left Section================= */}
        <div
          className={`relative flex justify-center flex-1 p-12 border-r sm:px-4 md:border-r-0  md:border-b dark:border-prim-black-1 border-prim-gray-1
                        ${paymentModal && 'opacity-20'}
                        ${successModal && 'opacity-20'} 
                      `}
        >
          {/* =================NFT Image================= */}
          <div className="relative shadow-xl minmd:mx-28 minmd:w-700 minmd:h-700 w-500 sm:w-full sm:h-300 h-500">
            <Image
              src={nft.image}
              alt=""
              objectFit="cover"
              className=" rounded-2xl"
              layout="fill"
            />
            <a
              className="absolute flex items-center justify-center w-10 h-10 pt-1 bg-opacity-50 cursor-pointer rounded-xl bg-slate-800 top-5 right-5 hover:bg-opacity-20"
              href={nft.image}
              target="_blank"
              rel="noreferrer"
            >
              <Tooltip content="Full Image">
                <Image
                  src={assets.Search}
                  width={25}
                  height={25}
                  objectFit="contain"
                />
              </Tooltip>
            </a>
          </div>
        </div>

        {/* =================Right Section================= */}
        <div
          className={`justify-start flex-1 p-12 sm:px-4 sm:pb-4
                         ${paymentModal && 'opacity-20'}
                         ${successModal && 'opacity-20'} 
                      `}
        >
          {/* =================NFT Name================= */}
          <div className="flex flex-row sm:flex-col ">
            <h2 className="w-full h-10 overflow-hidden text-3xl font-bold font-poppins">
              {nft.name}
            </h2>
          </div>

          {/* =================NFT Creator================= */}
          <div className="mt-10">
            <p className="text-lg font-semibold font-poppins dark:text-white text-prim-black-1 minlg:text-base">
              Seller
            </p>
            <div className="flex flex-row items-center mt-3">
              <div className="relative w-12 h-12 mr-2 minlg:w-20 minlg:h-20 ">
                <Image
                  src={assets.creatornft}
                  objectFit="cover"
                  layout="fill"
                  className="rounded-full"
                />
              </div>

              <p className="text-sm font-semibold font-poppins minmd:text-lg">
                {shortenAddress(nft.seller)}
              </p>
            </div>
          </div>

          {/* =================NFT Details================= */}
          <div className="flex flex-col mt-10">
            <div className="flex flex-row w-full border-b dark:border-prim-black-1 border-prim-gray-1">
              <p className="mb-2 text-lg font-medium font-poppins">Details</p>
            </div>
            <div className="mt-3">
              <p className="w-full overflow-y-scroll text-base font-normal break-words h-200 pc:w-700 font-poppins">
                {nft.description}
              </p>
            </div>
          </div>

          {/* =================Buy Section================= */}
          <div className="flex flex-row mt-10 sm:flex-col">
            {currentAccount === nft.seller.toLowerCase() ? (
              // If already listed
              <p className="p-2 text-base font-normal border text-prim-gray-2 font-poppins border-prim-gray-2">
                You can&#39;t buy your own NFT
              </p>
            ) : currentAccount === nft.owner.toLowerCase() ? (
              // If already owned
              <Button
                btnName="Sell NFT"
                btnType="primary"
                classStyles="mr-5 sm:mr-0 sm:mb-5 rounded-xl"
                handleClick={() =>
                  router.push(
                    `/resell-nft?id=${nft.tokenId}&tokenURI=${nft.tokenURI}`
                  )
                }
              />
            ) : (
              // If not owned or listed
              <Button
                btnName={`Buy for ${nft.price} ETH`}
                classStyles="mr-5 sm:mr-0 sm:mb-5 rounded-xl"
                handleClick={() =>
                  currentAccount !== ''
                    ? setPaymentModal(true)
                    : alert('Please connect your wallet to proceed tx 👀')
                }
              />
            )}
          </div>
        </div>
        {/* ==============================NFT-Detail Modal for Large Devices==================================== */}

        {/* ----------------------------------Opening Payment Modal------------------------------------ */}

        <div className="sm:hidden">
          {paymentModal && (
            <Modal
              header={<p className="font-bold">Check Out</p>}
              body={
                loading ? (
                  <>
                    <Loading />
                    <p className="text-xl font-semibold text-center font-poppins">
                      Pending for transaction. Please wait for MetaMask window
                      to be opened
                    </p>
                  </>
                ) : (
                  <div>
                    <div className="mb-5 font-semibold">
                      <p>Item</p>
                    </div>

                    <div className="flex flex-row justify-between mb-5">
                      <div className="relative w-40 h-40 border-2 rounded-lg">
                        <Image
                          src={nft.image}
                          alt="nft-image"
                          objectFit="cover"
                          layout="fill"
                          className="rounded-lg"
                        />
                      </div>

                      <div className="flex flex-col">
                        <p className="mb-4 overflow-hidden text-lg font-semibold w-80">
                          {nft.name}
                        </p>
                        <p className="h-20 overflow-y-scroll break-words w-80">
                          {nft.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <p className="font-semibold">Total</p>
                      <p>{nft.price} ETH</p>
                    </div>
                  </div>
                )
              }
              footer={
                <div className="flex justify-center">
                  <Button
                    btnName="Check out"
                    classStyles="mr-5 sm:mr-0 sm:mb-5 rounded-xl"
                    handleClick={checkout}
                  />

                  <Button
                    btnName="Cancel"
                    classStyles="mr-5 sm:mr-0 sm:mb-5 rounded-xl"
                    handleClick={() => setPaymentModal(false)}
                    cancelBg
                  />
                </div>
              }
              handleClose={() => setPaymentModal(false)}
            />
          )}

          {/* ------------------------------After bought nft Opening Success Modal-----------------------------     */}
          {successModal && (
            <Modal
              header={
                <p className="font-bold font-poppins">Payment Successful</p>
              }
              body={
                <div className="flex flex-col">
                  <div className="flex justify-center mb-7">
                    <Image
                      src={nft.image}
                      width={220}
                      height={220}
                      alt="nft-image"
                      // objectFit="cover"
                      // layout="fill"
                    />
                  </div>
                  <p className="overflow-hidden text-center">
                    You successfully purchased <strong>{nft.name}</strong> from{' '}
                    <strong>{shortenAddress(nft.seller)}</strong>
                  </p>
                </div>
              }
              footer={
                <div className="flex flex-col">
                  <p className="flex justify-center mb-5 text-xl font-semibold">
                    Share
                  </p>
                  <div className="flex justify-evenly">
                    {[
                      assets.facebook,
                      assets.instagram,
                      assets.telegram,
                      assets.twitter,
                      assets.discord,
                    ].map((image, i) => (
                      <Image
                        key={i}
                        src={image}
                        className={`hover:cursor-pointer ${
                          theme === 'light' && 'filter invert'
                        }`}
                        objectFit="contain"
                        width={20}
                        height={20}
                        alt="socialMedia"
                      />
                    ))}
                  </div>
                </div>
              }
              handleClose={() => setSuccessModal(false)}
            />
          )}
        </div>

        {/* ==============================NFT-Detail Modal for Small Devices==================================== */}

        {/* ----------------------------------Opening Payment Modal------------------------------------ */}

        <div className="mobile:hidden galaxyfold:hidden">
          {paymentModal && (
            <Modal
              header={<p className="font-bold">Check Out</p>}
              body={
                <div>
                  <p className="mb-5 font-semibold">Item</p>
                  <div className="flex justify-between mb-5 rounded-lg">
                    <Image
                      src={nft.image}
                      width={100}
                      height={100}
                      alt="nft-image"
                      className="rounded-lg"
                    />
                    <div className="">
                      <p className="h-5 mb-5 font-medium w-44">{nft.name}</p>
                      <p className="w-40 h-10 overflow-y-scroll break-words">
                        {nft.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-semibold">Total</p>
                    <div className="flex flex-row">
                      <p className="mr-2">{nft.price}</p>
                      <p>ETH</p>
                    </div>
                  </div>
                </div>
              }
              footer={
                <div className="flex justify-evenly sm:pt-5">
                  <Button
                    btnName="Check out"
                    classStyles="mr-5 sm:mr-0 sm:mb-5 rounded-xl"
                    handleClick={checkout}
                  />
                  <Button
                    btnName="Cancel"
                    classStyles="mr-5 sm:mr-0 sm:mb-5 rounded-xl"
                    handleClick={() => setPaymentModal(false)}
                    cancelBg
                  />
                </div>
              }
              handleClose={() => setPaymentModal(false)}
            />
          )}

          {/* ------------------------------After bought nft Opening Success Modal-----------------------------     */}
          {successModal && (
            <Modal
              header={
                <p className="font-bold font-poppins">Payment Successful</p>
              }
              body={
                <div className="flex flex-col">
                  <div className="flex justify-center mb-7">
                    <Image
                      src={nft.image}
                      width={140}
                      height={140}
                      alt="nft-image"
                      // objectFit="cover"
                      // layout="fill"
                    />
                  </div>
                  <p className="text-center">
                    You successfully purchased{' '}
                    <strong>{shortenAddress(nft.name)}</strong> from{' '}
                    <strong>{shortenAddress(nft.seller)}</strong>
                  </p>
                </div>
              }
              footer={
                <div className="flex flex-col">
                  <p className="flex justify-center mb-5 text-xl font-semibold sm:mb-3">
                    Share
                  </p>
                  <div className="flex justify-evenly">
                    {[
                      assets.facebook,
                      assets.instagram,
                      assets.telegram,
                      assets.twitter,
                      assets.discord,
                    ].map((image, i) => (
                      <Image
                        key={i}
                        src={image}
                        className={`hover:cursor-pointer ${
                          theme === 'light' && 'filter invert'
                        }`}
                        objectFit="contain"
                        width={20}
                        height={20}
                        alt="socialMedia"
                      />
                    ))}
                  </div>
                </div>
              }
              handleClose={() => setSuccessModal(false)}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default NFTdetail;
