'use client';

import { type FormEvent, useState } from 'react';

interface Values {
  name: string;
  type: string;
}

interface FilterProps {
  initialValues: Values;
  onSubmit: (values: Values) => void;
  isLoading: boolean;
}

export const Filter = ({ initialValues, onSubmit, isLoading }: FilterProps) => {
  const [fieldValue, setFieldValue] = useState(initialValues);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    onSubmit(fieldValue);
  };

  return (
    <form className='flex gap-x-5' onSubmit={handleSubmit}>
      <div>
        <label className='text-[16px] text-slate-200' htmlFor='name'>
          Name
          <input
            type='text'
            id='name'
            value={fieldValue?.name}
            onChange={(e) => setFieldValue({ ...fieldValue, name: e.target.value })}
            className='px-4 mt-2 text-black py-3 max-w-[250px] w-full rounded-[5px]'
          />
        </label>
      </div>
      <div>
        <label className='text-[16px] text-slate-200' htmlFor='type'>
          Type
          <input
            type='text'
            id='type'
            value={fieldValue?.type}
            onChange={(e) => setFieldValue({ ...fieldValue, type: e.target.value })}
            className='px-4 mt-2 text-black py-3 max-w-[250px] w-full rounded-[5px]'
          />
        </label>
      </div>
      <button
        className='text-black mt-auto h-[43px] max-w-[100px] w-full px-4 py-3 bg-green-400 hover:bg-fuchsia-300 rounded-[5px]'
        type='submit'
        disabled={isLoading}
      >
        FILTER
      </button>
    </form>
  );
};
