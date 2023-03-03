import { useCallback, useState, useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import { create as ipfsHttpClient } from 'ipfs-http-client';
import { useRouter } from 'next/router';

import Button from '../components/Button';
import Input from '../components/Input';
import { Context } from '../context/Context';

// Connect Infura Dedicated Gateway
const projectId = process.env.PROJECT_ID;
const projectSecret = process.env.INFURA_KEY;
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

console.log(projectId, ' || ', projectSecret);

const CreateNFT = () => {
  const { createNFT } = useContext(Context);
  const router = useRouter();
  const [fileUrl, setFileUrl] = useState(null);
  const [formInput, setFormInput] = useState({
    name: '',
    description: '',
    price: '',
  });

  const createMarketItem = async () => {
    const { name, description, price } = formInput;

    if (!fileUrl || !name || !description || !price) return;

    const data = JSON.stringify({ name, description, image: fileUrl });
    try {
      const added = await client.add(data);
      const url = `${dedicatedEndPoint}/ipfs/${added.path}`;
      await createNFT(url, price);
      router.push('/');
    } catch (error) {
      console.log('Error creating NFT:', error);
    }
  };

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
    accept: { 'image/jpeg': [], 'image/png': [] },
    maxSize: 5000000,
  });

  return (
    <div className="p-16 md:p-8">
      <div className="flex flex-row items-center sm:flex-col">
        <h1 className="ml-4 text-3xl font-semibold font-poppins">
          Create your
        </h1>
        <div className="ml-2 text-4xl font-extrabold font-poppins sm:mt-2 font-gradient">
          NFT
        </div>
      </div>

      <div className="mt-10">
        <p className="text-xl font-semibold font-poppins">Upload file</p>
        <div className="mt-4">
          <div
            {...getRootProps()}
            className="flex flex-col items-center p-5 border-4 border-dashed dark:bg-prim-black-1 dark:border-white border-prim-gray-2 rounded-xl"
          >
            <input {...getInputProps()} />
            <div className={fileUrl && 'hidden'}>
              <div className="flex flex-col items-center">
                <p className="my-2 text-lg font-semibold font-poppins">
                  Drag and drop your file here
                </p>
                <p className="my-2 text-lg font-semibold font-poppins">or</p>
                <p className="my-2 text-lg font-semibold font-poppins">
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
          handleClick={createMarketItem}
        />
      </div>
    </div>
  );
};

export default CreateNFT;
