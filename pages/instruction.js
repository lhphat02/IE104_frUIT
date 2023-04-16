import { Accordion } from 'flowbite-react';
import Link from 'next/link';

const Intruction = () => {
  return (
    <div className="py-10 mx-20 md:mx-8">
      <h1 className="my-10 text-4xl font-semibold text-center font-poppins md:text-2xl">
        Let&#39;s take the first step to create your NFTs on
        <br />
        frUIT Marketplace
      </h1>
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
              We highly recommend using MetaMask Wallet on this website.
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
            Step 2. Switch to the Sepolia Testnet
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Our website is deploy on Sepolia Testnet so that you have to
              switch your network (Ethereum Mainnet by default).
              <br />
              On MetaMask window, click network toggle at the top and switch
              your network to Sepolia Testnet.
              <br />
              Don&#39;t see Sepolia Testnet ? Don&#39;t worry, be patient and
              follow my steps 👇
            </p>
            <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
              <li>
                <p>
                  Open MetaMask window and click to your avatar at top right
                  corner.
                </p>
              </li>
              <li>
                <p>Click Settings at the bottom, then click Advanced.</p>
              </li>
              <li>
                <p>
                  Scroll down a little bit, at Show test networks section, turn
                  it on.{' '}
                </p>
              </li>
              <li>
                <p>Now you can access to Sepolia Testnet. Cheers !</p>
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
              recieve ? Chill, the transaction is a little bit slow..
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
