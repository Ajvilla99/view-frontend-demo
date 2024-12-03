import React from 'react';
import { IoCheckmark } from 'react-icons/io5';

interface Props {
  title: string;
  value: string;
  number: string;
  onClick: () => void;
}

export const SelectionTriggerButton = ({ title, value, number, onClick }: Props) => {
  return (
    <button
    type='button'
    onClick={()=>onClick()}
    className='px-3 py-4 lg:px-5 text-white text-center lg:text-left'
  >
    <div className='flex items-center justify-center p-1'>
    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-2xl
                        ${ ( value === '' ) ? 'bg-slate-600' : 'bg-teal-600'}
                      `}>
      { ( value === '' ) ? number : <IoCheckmark/> }
      </div>
    </div>
    <p className='text-center capitalize'>
      { ( value === '' ) ? `Seleccionar ${title}` : `${title} seleccionado` }
    </p>
    {
      (value !== '' ) && (
        <p className='text-center'>
          { value }
        </p>
      )
    }
</button>
  );
};
