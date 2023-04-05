const theme = {
  accordion: {
    root: {
      base: 'dark:bg-prim-black-2 divide-y dark:border-prim-black-3',
      flush: {
        off: 'rounded-lg border',
        on: 'border-b',
      },
    },
    content: {
      base: 'py-5 px-5 last:rounded-b-lg dark:bg-prim-black-1 first:rounded-t-lg',
    },
    title: {
      base: 'flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-5 px-5 text-left font-medium text-gray-500 dark:text-gray-400',
      flush: {
        off: 'hover:bg-gray-100 dark:border-prim-black-3 dark:hover:bg-prim-black-3',
        on: '!bg-transparent dark:!bg-transparent',
      },
      heading: '',
      open: {
        off: '',
        on: 'text-gray-900 bg-gray-100 dark:bg-prim-black-3 dark:text-white',
      },
    },
  },
  toast: {
    root: {
      base: 'flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-prim-black-1 dark:text-gray-400',
    },
    toggle: {
      base: '-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-prim-black-1 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white',
    },
  },
};

export default theme;
