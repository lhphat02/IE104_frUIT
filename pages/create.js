import { useDropzone } from 'react-dropzone';
import { useCallback, useState } from 'react';
import Image from 'next/image';

import Button from '../components/Button';
import Input from '../components/Input';

const Dropzone = {
  
}

const FileDropzone = ({ value, onChange}) => {
  const [loading, setLoading] = useState(false);

  const OnDrop = useCallback((acceptedFiles) => {
    setLoading(true);
    uploadImage(acceptedFiles[0])
    .then((json) => onChange(json.url))
    .finally(() => setLoading(false));
  }, []);

  const {getRootProps, getInputProps} = useDropzone({
    OnDrop,
    multiple: false,
    accept:'image/*'
  })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        value ? (
          <Image 
          src = {value}
          alt = "upload"  
          />
        ) : loading ? (
          <p>Loading...</p>
        ):(
          <p className="flex justify-center p-5 text-xl font-poppins font-medium 
                        text-prim-gray-2 dark:text-prim-gray-1 h-80 pt-32 hover:cursor-pointer">
            Drag and drop some files here, or click to select files
          </p>
        )
      }
    </div>
  )
}

const CreateNFT = () => {

  const [image, setImage] = useState("")

  return (
    <div className='p-16'>
      <div className='flex flex-row items-center'>
        <h1 className="font-poppins text-3xl font-semibold ml-4"
        >
          Create your
        </h1>
        <div className='font-poppins font-extrabold text-4xl sm:mb-4 ml-2 font-gradient'
        >
          NFT
    </div>

    {/* ==============================Drop zone================================== */}

      {/* <h2 className="font-poppins text-xl font-semibold mb-4 mt-6">Upload File</h2>
     <div className='border-4 border-prim-gray-1 border-dashed rounded-2xl mt-4 h-80'>
     <Dropzone>
        {({getRootProps, getInputProps}) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p className="flex justify-center p-5 text-xl font-poppins font-medium text-prim-gray-2 dark:text-prim-gray-1 h-80 pt-32">
              Drag and drop your file here, or click to select files
            </p>
          </div>
        )}
      </Dropzone>    
     </div>  */}
      <div>
        <h2 className="font-poppins text-xl font-semibold mb-4 mt-6">Upload File</h2> 
        <div className='border-4 border-prim-gray-1 border-dashed rounded-2xl mt-4 h-80'>
          <FileDropzone value={image} onChange={setImage}/>
        </div>
      </div>
    
      <Input
          inputType="input"
          title="Name"
          placeholder="NFT Name"
        />
        <Input
          inputType="textarea"
          title="Description"
          placeholder="Describe your NFT"
        />
        <Input
          inputType="number"
          title="Price"
          placeholder="NFT Price"
        />
        <div className="flex justify-end mt-10">
          <Button
            BtnName="Create NFT"
            classStyles="rounded-lg text-lg active:scale-110 duration-100"
            handleClick={() => {}}
          />
        </div>
  </div>
)
}
export default CreateNFT;
