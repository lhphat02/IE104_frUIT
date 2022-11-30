import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { Context } from '../context/Context';
import assets from '../assets';
import Loading from '../components/Loading';

const NFTdetail = () => {
  const { buyNFT } = useContext(Context);
  return (
    <div>
      <div> </div>
    </div>
  );
};

export default NFTdetail;
