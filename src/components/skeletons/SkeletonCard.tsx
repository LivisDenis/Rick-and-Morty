export const SkeletonCard = () => (
  <div role='status' className='animate-pulse rounded-[10px] bg-gray-600 p-6'>
    <div className='h-4 bg-gray-300 rounded-[5px] dark:bg-gray-700 max-w-[640px] mb-3 mx-auto' />
    <div className='h-4 mx-auto bg-gray-300 rounded-[5px] dark:bg-gray-700 max-w-[540px]' />
    <span className='sr-only'>Loading...</span>
  </div>
);
