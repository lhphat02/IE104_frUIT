import images from '../assets';
import CreatorCard from '../components/CreatorCard.jsx';

const Home = () => {
  return (
    <div className='flex justify-center  p-10 flex-col w-full minmd:w-4/5'>

      {/* banner */}
      <div className=' py-10'  >
          <div className='prim-gradient h-72 px-10 items-center flex rounded-3xl'>
            <p className='text-5xl md:text-4xl text-white font-bold '>Discover, collect, and sell extraordinary NFTs</p>
          </div>
      </div>

      {/* Creators */}
        <p className='dark:text-white text-3xl font-bold text-prim-black-3'>Top Creators</p>
        <div className='flex justify-between '>
          <div>
            <CreatorCard
                imageCard={images.creator1}
                number="1"
                name="Phat Luu"
              >
            </CreatorCard>
          </div>
          <div>
            <CreatorCard
                imageCard={images.creator2}
                number="2"
                name="Quan"
              >
            </CreatorCard>
          </div>
          <div>
            <CreatorCard
                imageCard={images.creator3}
                number="3"
                name="Tuan"
              >
            </CreatorCard>
          </div>
          <div>
            <CreatorCard
                imageCard={images.creator4}
                number="4"
                name="Huy"
              >
            </CreatorCard>
          </div>
          <div>
            <CreatorCard
                imageCard={images.creator5}
                number="5"
                name="Khiem"
              >
            </CreatorCard>
          
        </div> 
      </div>
    </div>
  )
}

export default Home;

