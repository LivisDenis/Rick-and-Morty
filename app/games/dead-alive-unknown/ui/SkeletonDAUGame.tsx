const SkeletonDAUGame = () => (
  <div role='status' className='animate-pulse rounded-[10px] bg-gray-600'>
    <div className='h-[284px] bg-gray-300 rounded-[5px] dark:bg-gray-700 max-w-[394px] mx-auto' />
    {/* <div className='h-4 mx-auto bg-gray-300 rounded-[5px] dark:bg-gray-700 max-w-[540px]' /> */}
    <span className='sr-only'>Loading...</span>
  </div>
);
// h-284 w-394
export default SkeletonDAUGame;
