import React, { type ComponentPropsWithRef } from 'react';

type InputProps = ComponentPropsWithRef<'input'>;

export const Input = ({ ...props }: InputProps) => (
  <input
    type='text'
    {...props}
    className='px-4 mt-2 text-black py-3 max-w-[250px] w-full rounded-[5px]'
  />
);

export default Input;
