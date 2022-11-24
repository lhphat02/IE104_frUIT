import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import { create as ipfsHttpClient } from 'ipfs-http-client';

import Button from '../components/Button';
import Input from '../components/Input';

// Connect Infura Dedicated Gateway
const projectId = '2HzKZHh7OyLxfrib8uAOuZexRbD';
const projectSecret = '525733ee30c91b97e669099d89600345';
const auth = `Basic ${Buffer.from(`${projectId}:${projectSecret}`).toString(
  // eslint-disable-next-line comma-dangle
  'base64'
)}`;
const options = {
  host: 'ipfs.infura.io',
  protocol: 'https',
  port: 5001,
  headers: { authorization: auth },
};
const client = ipfsHttpClient(options);
const dedicatedEndPoint = 'https://fruit-marketplace.infura-ipfs.io';

// const FileDropzone = ({ value, onChange, uploadToInfura }) => {
//   const [loading, setLoading] = useState(false);

//   const OnDrop = useCallback(async (acceptedFiles) => {
//     setLoading(true);
//     await uploadToInfura(acceptedFiles[0])
//       .then((json) => onChange(json.url))
//       .finally(() => setLoading(false));
//   }, []);

//   const { getRootProps, getInputProps } = useDropzone({
//     OnDrop,
//     multiple: false,
//     accept: 'image/*',
//     maxSize: 5000000,
//   });

//   return (
//     <div {...getRootProps()}>
//       <input {...getInputProps()} />
//       {value ? (
//         <Image src={value} alt="upload" />
//       ) : loading ? (
//         <p>Loading...</p>
//       ) : (
//         <p
//           className="flex justify-center p-5 text-xl font-poppins font-medium
//                         text-prim-gray-2 dark:text-prim-gray-1 h-80 pt-32 hover:cursor-pointer"
//         >
//           Drag and drop some files here, or click to select files
//         </p>
//       )}
//     </div>
//   );
// };

const CreateNFT = () => {
  const [fileUrl, setFileUrl] = useState(false);

  const uploadToInfura = async (file) => {
    try {
      const added = await client.add({ content: file });

      const url = `${dedicatedEndPoint}/ipfs/${added.path}`;

      setFileUrl(url);
    } catch (error) {
      console.log('Error uploading file: ', error);
    }
  };

  const onDrop = useCallback(async (acceptedFile) => {
    await uploadToInfura(acceptedFile[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
    maxSize: 5000000,
  });

  return (
    <div className="p-16">
      <div className="flex flex-row items-center">
        <h1 className="font-poppins text-3xl font-semibold ml-4">
          Create your
        </h1>
        <div className="font-poppins font-extrabold text-4xl sm:mb-4 ml-2 font-gradient">
          NFT
        </div>
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
      {/* <div>
        <h2 className="font-poppins text-xl font-semibold mb-4 mt-6">
          Upload File
        </h2>
        <div className="border-4 border-prim-gray-1 border-dashed rounded-2xl mt-4 h-80">
          <FileDropzone
            value={image}
            onChange={setImage}
            uploadToInfura={uploadToInfura}
          />
        </div>
      </div> */}

      {/* Phat's dropzone */}
      <div className="mt-10">
        <p className="font-poppins text-xl font-semibold">Upload file</p>
        <div className="mt-4">
          <div
            {...getRootProps()}
            className="dark:bg-prim-black-1 border-4 dark:border-white border-prim-gray-2 flex flex-col items-center p-5 rounded-sm border-dashed"
          >
            <input {...getInputProps()} />
            <div className={fileUrl && 'hidden'}>
              <div className="flex items-center flex-col">
                <p className="font-poppins text-lg font-semibold my-2">
                  Drag and drop your file here
                </p>
                <p className="font-poppins text-lg font-semibold my-2">or</p>
                <p className="font-poppins text-lg font-semibold my-2">
                  Click here to import file from your device
                </p>
              </div>
            </div>

            {fileUrl && (
              <div>
                <img src={fileUrl} alt="nft_file" />
              </div>
            )}
          </div>
        </div>
      </div>

      <Input inputType="input" title="Name" placeholder="NFT Name" />
      <Input
        inputType="textarea"
        title="Description"
        placeholder="Describe your NFT"
      />
      <Input inputType="number" title="Price" placeholder="NFT Price" />
      <div className="flex justify-end mt-10">
        <Button
          btnName="Create NFT"
          classStyles="rounded-lg text-lg active:scale-110 duration-100"
          handleClick={() => {}}
        />
      </div>
    </div>
  );
};

export default CreateNFT;
