import { Spinner } from 'flowbite-react';

const Loading = () => {
  return (
    <div className="my-20 text-center">
      <Spinner color="pink" aria-label="Pink spinner example" size="xl" />
    </div>
  );
};

export default Loading;
