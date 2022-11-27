import { useCallback, useState, useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import { create as ipfsHttpClient } from 'ipfs-http-client';

import Button from '../components/Button';
import Input from '../components/Input';
import { Context } from '../context/Context';

// Connect Infura Dedicated Gateway
const projectId = '2HzKZHh7OyLxfrib8uAOuZexRbD';
const projectSecret = '525733ee30c91b97e669099d89600345';
const auth = `Basic ${Buffer.from(`${projectId}:${projectSecret}`).toString(
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

const CreateNFT = () => {
  const { createNFT } = useContext(Context);
  const [fileUrl, setFileUrl] = useState(false);
  const [formInput, setFormInput] = useState({
    name: '',
    description: '',
    price: '',
  });

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
    multiple: false,
    accept: 'image/*',
    maxSize: 5000000,
  });

  return (
    <div className="p-16 md:p-8">
      <div className="flex flex-row sm:flex-col items-center">
        <h1 className="font-poppins text-3xl font-semibold ml-4">
          Create your
        </h1>
        <div className="font-poppins font-extrabold text-4xl ml-2 sm:mt-2 font-gradient">
          NFT
        </div>
      </div>

      <div className="mt-10">
        <p className="font-poppins text-xl font-semibold">Upload file</p>
        <div className="mt-4">
          <div
            {...getRootProps()}
            className="dark:bg-prim-black-1 border-4 dark:border-white border-prim-gray-2 flex flex-col items-center p-5 rounded-xl border-dashed"
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

      <Input
        inputType="input"
        title="Name"
        placeholder="NFT Name"
        handleClick={(e) =>
          setFormInput({ ...formInput, name: e.target.value })
        }
      />
      <Input
        inputType="textarea"
        title="Description"
        placeholder="Describe your NFT"
        handleClick={(e) =>
          setFormInput({ ...formInput, description: e.target.value })
        }
      />
      <Input
        inputType="number"
        title="Price"
        placeholder="NFT Price"
        handleClick={(e) =>
          setFormInput({ ...formInput, price: e.target.value })
        }
      />
      <div className="flex justify-end mt-10">
        <Button
          btnName="Create NFT"
          classStyles="rounded-lg text-lg active:scale-110 duration-100"
          handleClick={() => createNFT(fileUrl, formInput.price)}
        />
      </div>
    </div>
  );
};

export default CreateNFT;
