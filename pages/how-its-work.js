import react from "react";

const howItwork = () => {
    return(
    <div className="mx-20">
        <p className="my-10 text-7xl text-center font-bold font-poppins">How it work</p>
        <div className="grid grid-cols-5 gap-5 py-16 text-center">
            <div className="flex flex-col items-center justify-center rounded-br-4xl rounded-tl-4xl border-2 border-prim-dark dark:border-white shadow-2xl">
                <img className="rounded-lg my-5"
                        src="https://is5-ssl.mzstatic.com/image/thumb/Purple118/v4/80/97/57/809757c5-413b-541a-544f-5f7a08f5ca97/source/512x512bb.jpg"
                        alt="Icon Bước 1" width="20%">
                </img>    
                <p className="mb-10 text-2xl font-semibold border-b-2 border-gray-400">Step 1</p>
                <p className="mb-5 text-lg">
                    Create Metamask Account
                </p>
            </div>

            <div className="flex flex-col items-center justify-center">
                <img className=""
                        src="https://th.bing.com/th/id/OIP.gaXH6oISXUoMyAJTttqaEgHaHa?pid=ImgDet&rs=1"
                        alt="Mũi tên" width="30%">
                </img>
            </div>

            <div className="flex flex-col items-center justify-center rounded-br-4xl rounded-tl-4xl border-2 border-prim-dark dark:border-white shadow-2xl">
                <img className="rounded-lg my-5"
                        src="https://is5-ssl.mzstatic.com/image/thumb/Purple118/v4/80/97/57/809757c5-413b-541a-544f-5f7a08f5ca97/source/512x512bb.jpg"
                        alt="Icon Bước 2" width="20%">
                </img>    
                <p className="mb-10 text-2xl font-semibold border-b-2 border-gray-400">Step 2</p>
                <p className="mb-5 text-lg">
                    Import given accounts to wallet after create local nodes (20 accounts with 10000ETH)
                </p>
            </div>

            <div className="flex flex-col items-center justify-center">
                <img className=""
                        src="https://th.bing.com/th/id/OIP.gaXH6oISXUoMyAJTttqaEgHaHa?pid=ImgDet&rs=1"
                        alt="Mũi tên" width="30%">
                </img>
            </div>
            
            <div className="flex flex-col items-center justify-center rounded-br-4xl rounded-tl-4xl border-2 border-prim-dark dark:border-white shadow-2xl">
                <img className="rounded-lg my-5"
                        src="https://is5-ssl.mzstatic.com/image/thumb/Purple118/v4/80/97/57/809757c5-413b-541a-544f-5f7a08f5ca97/source/512x512bb.jpg"
                        alt="Icon Bước 3" width="20%">
                </img>    
                <p className="mb-10 text-2xl font-semibold border-b-2 border-gray-400">Step 3</p>
                <div className="mb-5 text-lg-justify-center">
                    <pre>Go to Setting</pre>
                    <pre>Advance</pre>
                    <pre>Scroll down and turn on Show test net</pre>
                </div>
            </div>
        </div>
        <p className="text-center text-light">
            scrfds
        </p>
    </div>
    
)}

export default howItwork