import { Accordion } from 'flowbite-react';
import Link from 'next/link';

const Intruction = () => {
  return (
    <div className="py-10 mx-20">
      <p className="my-10 text-4xl font-semibold text-center font-poppins">
        Let&#39;s take the first step to create your NFTs
      </p>
      <div />
      <Accordion alwaysOpen className="my-20">
        <Accordion.Panel>
          <Accordion.Title>
            Step 1. Create your Crypto Currency Wallet
          </Accordion.Title>
          <Accordion.Content className="dark:bg-prim-black-1">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              First thing first, you will need a crypto wallet.
              <br />A cryptocurrency wallet is a software application that
              allows users to securely store, manage, and transfer their digital
              currencies such as Bitcoin, Ethereum, and other cryptocurrencies.
              It stores the private keys necessary for accessing and managing
              one&#39;s cryptocurrency holdings, and enables transactions
              between different wallet addresses. Crypto wallets come in various
              forms, including desktop, mobile, hardware, and online/web-based
              wallets. We highly recommend using Metamask Wallet on this
              website.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Create your MetaMask Wallet
              <a
                href="https://metamask.io/"
                className="mx-1 text-blue-600 hover:underline dark:text-blue-500"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              . Then click the Connect button on the top right corner to sign
              in.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            Step 2. What&#39;s Web3? NFT? Ethereum?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Well yes, our website can be called a &quot;web3&quot;.
              <br />
              This&#39;s a website that allows you to create/mint your NFT on
              Sepolia Testnet - a testnet on Ethereum Blockchain. Which using
              SepoliaETH as currency and store your NFTs on IPFS through Infura
              Service.
              <br />
              More specific ? Check it out below 👇
            </p>
            <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
              <li>
                <a
                  href="https://ethereum.org/en/what-is-ethereum/"
                  target="_blank"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                  rel="noreferrer"
                >
                  Ethereum
                </a>
              </li>
              <li>
                <a
                  href="https://opensea.io/learn/what-are-nfts"
                  rel="nofollow noreferrer"
                  target="_blank"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  NFT
                </a>
              </li>
              <li>
                <a
                  href="https://hbr.org/2022/05/what-is-web3"
                  rel="nofollow noreferrer"
                  target="_blank"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  Web3
                </a>
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Step 3. How do I mint my NFTs ?</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Before you mint your NFTs, of course, you&#39;ll need money. But
              don&#39;t worry, we don&#39;t use &#34;real&#34; money here.
              We&#39;ll use something call SepoliaETH. And how to get it ?
              <a
                href="https://sepoliafaucet.com/"
                className="mx-1 text-blue-600 hover:underline dark:text-blue-500"
                target="_blank"
                rel="noreferrer"
              >
                Click here
              </a>
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              After you have Signed in your Alchemy account and paste in your
              Wallet public key, it will send you 1 SepoliaETH. Did&#39;t
              recieve ? Chill, the transaction is a lil bit slow, you can check
              it by open the metamask extention and watch your pending
              transaction at the bottom.
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Got your SepoliaETH ? Great! Now it&#39;s time to create your
              first NFT
            </p>
            <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
              <li>
                <Link
                  href="/create"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  Click here to create your NFTs
                </Link>
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default Intruction;
