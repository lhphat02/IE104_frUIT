
import Image from 'next/image';

import images from '../assets';

import CreatorCard from '../components/CreatorCard.jsx';

const Home = () => {
  return (
    <div className='flex justify-center p-10 flex-col  '>

      {/* banner */}
      <div className='w-full py-10'  >
          <div className='W-full prim-gradient h-72 px-10 items-center flex rounded-3xl'>
            <p className='text-4xl text-white font-semibold '>Discover, collect, and sell extraordinary NFTs</p>
          </div>
      </div>

      {/* Creators */}
      <div className='bg-black rounded-xl p-2'>
        <p className='text-white font-semibold'>Top Sellers</p>
        <div className='flex justify-evenly '>
          <div>
            <CreatorCard
                imageCard={images.creator1}
                number="1"
                money="5"
                name="Phat Luu"
              >
            </CreatorCard>
          </div>
          <div>
            <CreatorCard
                imageCard={images.creator2}
                number="2"
                money="7"
                name="Quan Nguyen"
              >
            </CreatorCard>
          </div>
          <div>
            <CreatorCard
                imageCard={images.creator3}
                number="3"
                money="999.9"
                name="Tuan Anh"
              >
            </CreatorCard>
          </div>
          <div>
            <CreatorCard
                imageCard={images.creator4}
                number="4"
                money="5"
                name="Huy"
              >
            </CreatorCard>
          </div>
          <div>
            <CreatorCard
                imageCard={images.creator5}
                number="5"
                money="0.5"
                name="Khiem"
              >
            </CreatorCard>
          </div>
          
        </div> 
      </div>
    </div>
  )
}

export default Home;

