import Image from "next/image";
import { useTheme } from "next-themes";

import assets from "../assets";



const Intruction = () => {
    const {theme} = useTheme();

    return(
    <div className="mx-20">
        <p className="my-10 text-7xl text-center font-bold font-poppins">How it works</p>
        <div className="grid grid-cols-5 gap-5 py-16 text-center">
            <div className="flex flex-col items-center justify-center rounded-br-4xl rounded-tl-4xl border-2 border-prim-dark dark:border-white shadow-2xl p-5 rounded-xl">
                <img className="rounded-lg my-5 border-2 border-prim-gray-1 dark:border-none shadow-lg"
                        src="https://is5-ssl.mzstatic.com/image/thumb/Purple118/v4/80/97/57/809757c5-413b-541a-544f-5f7a08f5ca97/source/512x512bb.jpg"
                        alt="Icon Bước 1" width="20%">
                </img>    
                <p className="mb-10 text-2xl font-semibold border-b-2 border-gray-400">Step 1</p>
                <p className="mb-5 text-lg">
                    Create Metamask Account
                </p>
            </div>

            <div className="flex flex-col items-center justify-center">
                <Image 
                        src={assets.arrow}
                        width={100}
                        height={100}
                        alt="arrow"
                        className={`hover:cursor-pointer ${
                        theme === 'light' && 'filter invert'
                      }`}
                />
            </div>

            <div className="flex flex-col items-center justify-center rounded-br-4xl rounded-tl-4xl border-2 border-prim-dark dark:border-white shadow-2xl p-5 rounded-xl">
                <img className="rounded-lg my-5 border-2 border-prim-gray-1 dark:border-none shadow-lg"
                        src="https://is5-ssl.mzstatic.com/image/thumb/Purple118/v4/80/97/57/809757c5-413b-541a-544f-5f7a08f5ca97/source/512x512bb.jpg"
                        alt="Icon Bước 2" width="20%">
                </img>    
                <p className="mb-10 text-2xl font-semibold border-b-2 border-gray-400">Step 2</p>
                <p className="mb-5 text-lg">
                    Import given accounts to wallet after create local nodes (20 accounts with 10000ETH)
                </p>
            </div>

            <div className="flex flex-col items-center justify-center">
                <Image 
                        src={assets.arrow}
                        width={100}
                        height={100}
                        alt="arrow"
                        className={`hover:cursor-pointer ${
                        theme === 'light' && 'filter invert'
                      }`}
                />
            </div>
            
            <div className="flex flex-col items-center justify-center rounded-br-4xl rounded-tl-4xl border-2 border-prim-dark dark:border-white shadow-2xl p-5 rounded-xl">
                <img className="rounded-lg my-5 border-2 border-prim-gray-1 dark:border-none shadow-lg"
                        src="https://is5-ssl.mzstatic.com/image/thumb/Purple118/v4/80/97/57/809757c5-413b-541a-544f-5f7a08f5ca97/source/512x512bb.jpg"
                        alt="Icon Bước 3" width="20%">
                </img>    
                <p className="mb-10 text-2xl font-semibold border-b-2 border-gray-400">Step 3</p>
                <div className="mb-5 text-lg justify-center">
                    <p>Go to Setting {' => '} Advance {' => '} scroll down and turn on Show test net</p>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center">
                <Image 
                        src={assets.arrow}
                        width={100}
                        height={100}
                        alt="arrow"
                        className={`hover:cursor-pointer ${
                        theme === 'light' && 'filter invert'
                      }`}
                />
            </div>

            <div className="flex flex-col items-center justify-center rounded-br-4xl rounded-tl-4xl border-2 border-prim-dark dark:border-white shadow-2xl mt-12 p-5 rounded-xl">
                <img className="rounded-lg my-5 border-2 border-prim-gray-1 dark:border-none shadow-lg"
                        src="https://is5-ssl.mzstatic.com/image/thumb/Purple118/v4/80/97/57/809757c5-413b-541a-544f-5f7a08f5ca97/source/512x512bb.jpg"
                        alt="Icon Bước 4" width="20%">
                </img>    
                <p className="mb-10 text-2xl font-semibold border-b-2 border-gray-400">Step 4</p>
                <div className="mb-5 text-lg justify-center">
                    <p>Switch network to <br /> Localhost {':'} 8545</p>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center">
                <Image 
                        src={assets.arrow}
                        width={100}
                        height={100}
                        alt="arrow"
                        className={`hover:cursor-pointer ${
                        theme === 'light' && 'filter invert'
                      }`}
                />
            </div>

            <div className="flex flex-col items-center justify-center rounded-br-4xl rounded-tl-4xl border-2 border-prim-dark dark:border-white shadow-2xl mt-12 p-5 rounded-xl">
                <img className="rounded-lg my-5 border-2 border-prim-gray-1 dark:border-none shadow-lg"
                        src="https://is5-ssl.mzstatic.com/image/thumb/Purple118/v4/80/97/57/809757c5-413b-541a-544f-5f7a08f5ca97/source/512x512bb.jpg"
                        alt="Icon Bước 5" width="20%">
                </img>    
                <p className="mb-10 text-2xl font-semibold border-b-2 border-gray-400">Step 5</p>
                <div className="mb-5 text-lg justify-center">
                    <p>Switch to imported accounts and connect to marketplace</p>
                </div>
            </div>
        </div>
    </div>
    
)}

export default Intruction;
