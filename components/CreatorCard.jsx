import Image from 'next/image';

import images from '../assets';

function CreatorCard (props) {
    console.log(props);
    return (
    <div className='bg-prim-black-3 rounded-2xl p-2 w-150 flex flex-col scroll m-5 mx-1 md:w-40 w-48 '> 

        <div className='w-8 h-8 md:w-6 md:h-6 md:text-xs p-1 rounded-full prim-gradient flex justify-center items-center '>
            <p className='font-semibold text-white' >{props.number}</p>
        </div>

        <div className='flex flex-col items-center '>
            <div className='relative w-20 h-20 md:w-14 md:h-14'>
                <Image className='rounded-full'
                    src={props.imageCard}
                    alt=''  
                    objectFit='cover'
                    layout='fill'
                />
                <div className='absolute right-0 bottom-0 w-5 h-5 md:w-4 md:h-4'>
                    <Image
                        src={images.tick}
                        alt=''
                    />
                </div>

            </div>
            <div className='justify-center my-4 font-poppins font-semibold md:text-sm' >
                <p className='text-white'>{props.name}</p>
            </div>
        </div>
    </div>
  )
}

export default CreatorCard;
