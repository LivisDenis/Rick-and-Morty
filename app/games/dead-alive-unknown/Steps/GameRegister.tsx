

export const GameRegister = () => {
  return (
    <div className='flex flex-col text-center bg-gray-600 py-9 px-6 rounded-[10px]'>
      <h2 className='text-slate-200 mb-8 font-bold text-[26px]'>Dead or Alive or Unknown</h2>
      <span className='text-slate-400 text-[18px]'>Write your name</span>
      <input
        type='text'
        className='px-3 mt-3 py-2 text-[18px] max-w-[250px] mx-auto bg-transparent border-2 border-slate-400 rounded-[10px] text-slate-200'
      />
      <button
        type='button'
        className='mt-6 max-w-[224px] mx-auto text-slate-200 w-full px-4 py-3 bg-green-600 hover:bg-fuchsia-600 rounded-[10px]'
      >
        START
      </button>
    </div>
  );
};
