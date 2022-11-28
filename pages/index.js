import images from '../assets';
import CreatorCard from '../components/CreatorCard.jsx';

const Home = () => (
  <div className="flex justify-center p-10 xs:p-6 flex-col w-full minmd:px-60 pc:px-28">
    {/* banner */}
    <div className="py-10">
      <div className="shadow-md prim-gradient h-72 sm:h-52 xs:h-48 px-10 items-center flex rounded-3xl">
        <p className="text-5xl md:text-4xl text-white font-bold sm:text-2xl xs:text-xl overflow-hidden">
          Discover, collect, and sell extraordinary NFTs
        </p>
      </div>
    </div>

    {/* Creators */}
    <p className="dark:text-white text-3xl font-bold text-prim-black-3 mb-6">
      Top Creators
    </p>
    <div className="flex justify-between sm:justify-evenly">
      <div>
        <CreatorCard
          imageCard={images.creator1}
          number="1"
          name="Phat Luu"
          address="0x7p5r...8txn"
        />
      </div>
      <div className="xs:hidden">
        <CreatorCard
          imageCard={images.creator2}
          number="2"
          name="Quan Ngu"
          address="0xefv1...tjy5"
        />
      </div>
      <div className="sm:hidden">
        <CreatorCard
          imageCard={images.creator3}
          number="3"
          name="Tuan Mai"
          address="0xtdt3...nh0n"
        />
      </div>
      <div className="md:hidden">
        <CreatorCard
          imageCard={images.creator4}
          number="4"
          name="Huy Ngo"
          address="0xh2fg...asd7"
        />
      </div>
      <div className="md:hidden">
        <CreatorCard
          imageCard={images.creator5}
          number="5"
          name="Khiem Chau"
          address="0xqk8...bw9e"
        />
      </div>
    </div>
  </div>
);

export default Home;
