import React from 'react';

// Definir el tipo de las claves de 'options'
type OptionType = 'sector' | 'cliente' | 'region' | 'sede';

interface Props {
  title?: string;
  name?: OptionType;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

// Definir las opciones de manera estática
const options: Record<OptionType, string[]> = {
  sector:   ['Sector 1', 'Sector 2', 'Sector 3'],
  cliente:  ['Cliente 1', 'Cliente 2', 'Cliente 3'],
  region:   ['Region 1', 'Region 2', 'Region 3'],
  sede:     ['Sede 1', 'Sede 2', 'Sede 3'],
};


export const SelectInputPopup = ({ name, value = '', onChange }: Props) => {

  if (!name || !options[name]) return null;
  const currentOptions = options[name];


  return (
    <div className='w-full h-full flex items-center justify-center absolute'>
      <div className='bg-white w-11/12 lg:w-[500px] p-5 rounded-lg z-20'>
      <label className='text-xl'>Seleccione {name}</label>
      <select 
        name={ name }
        value={ value }
        onChange={onChange}
        className='w-full bg-slate-100 outline-none p-3 rounded-md text-lg mt-2.5'
        >
        <option value='' disabled>
          Seleccione {(( name === 'region' || name === 'sede' ) ? 'una' : 'un')} { name }
        </option>

        {
          currentOptions.map(( option ) => (
            <option key={option} value={option} >
              {option}
            </option>
          ))
        }
      </select>
    </div>
    </div>
  )
}
