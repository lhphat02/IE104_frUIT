import { Flowbite, Toast } from 'flowbite-react';
import React from 'react';
import Link from 'next/link';

import theme from '../styles/custom';

const ToastComp = () => {
  return (
    <Toast theme={{ theme }} className="self-center shadow-2xl mb-7">
      <div className="mr-5 text-sm font-normal">You&#39;re new here?</div>
      <div className="flex items-center ml-auto space-x-2">
        <Link
          className="rounded-lg p-1.5 text-sm font-medium text-blue-600 hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-700"
          href="/instruction"
        >
          Get started
        </Link>
        <Toast.Toggle />
      </div>
    </Toast>
  );
};

export default ToastComp;
