import { useDropzone } from 'react-dropzone';

import Button from '../components/Button';
import Input from '../components/Input';

const CreateNFT = () => (
  <div className="p-16">
    <div className="flex flex-row items-center">
      <h1 className="font-poppins text-3xl font-semibold ml-4">
        Create your
      </h1>
      <div className="font-poppins font-extrabold text-4xl sm:mb-4 ml-2 font-gradient">
        NFT
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
);

export default CreateNFT;
