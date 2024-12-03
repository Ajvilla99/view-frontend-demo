import React, { useState } from 'react';
import { SelectInputPopup } from './SelectInputPopup';
import { SelectionTriggerButton } from './SelectionTriggerButton';
import { useNavigate } from 'react-router-dom';

type SelectionType = 'sector' | 'cliente' | 'region' | 'sede';

export const SecondForm = () => {

  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    sector: '',
    cliente: '',
    region: '',
    sede: '',
    codigoSede: '',
  })

  const [showPopup, setShowPopup] = useState<boolean>(false);
  
  // Estado para manejar el popup
  const [selectedType, setSelectedType] = useState<SelectionType | undefined>(undefined);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues((prev)=> ({
      ...prev,
      [name]: value
    }))
    setShowPopup(false);
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev)=> ({
      ...prev,
      [name]: value
    }))
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({formValues})
    navigate('/dashboard')
  }

  const onSelect = (type: SelectionType) => {
    setShowPopup(true);
    setSelectedType(type);
  }

  return (
    <form
      onSubmit={(e)=>onSubmit(e)}
      className='w-11/12 h-full lg:w-[700px] flex flex-col items-center lg:justify-center transition-all'>

      {
        showPopup && (
          <div
            onClick={() => setShowPopup(false)}
            className='fixed w-screen h-screen backdrop-blur-sm bg-black/60 left-0 top-0 z-10 flex items-center justify-center'>
          </div>
        )
      }

      {
        showPopup && (
            <SelectInputPopup
              name={selectedType}
              onChange={handleSelectChange}
            />
          )
      }

      <div className='h-[240px] mb-20'>
        <img 
          src="./logosbg.png" 
          alt="logo_enterprise" 
          className='h-full'
        />
      </div>

      <div className='w-full grid grid-cols-2 grid-rows-3 lg:grid-cols-4 lg:grid-rows-2 bg-slate-900 rounded-lg'>
        <SelectionTriggerButton
          title='sector'
          number='1'
          onClick={()=>onSelect('sector')}
          value={formValues.sector}
        />

        <SelectionTriggerButton
          title='cliente'
          number='2'
          onClick={()=>onSelect('cliente')}
          value={formValues.cliente}
        />

        <SelectionTriggerButton
          title='region'
          number='3'
          onClick={()=>onSelect('region')}
          value={formValues.region}
        />

        <SelectionTriggerButton
          title='sede'
          number='4'
          onClick={()=>onSelect('sede')}
          value={formValues.sede}
        />
        <div className='p-5 col-span-2 lg:col-span-4 flex flex-col items-center gap-2 bg-slate-500 rounded-b-md'>
          <label htmlFor="" className='text-white text-center'>Digitar codigo de la sede</label>
          <div className='flex'>
          <input
            type='text'
            placeholder='#00000000'
            name='codigoSede'
            value={formValues.codigoSede}
            onChange={handleInputChange}
            className='p-2.5 rounded-l-md w-4/5 outline-none'
          />
          <button
            type='submit'
            className='bg-slate-900 rounded-r-md px-2.5 text-white'>
              Continuar
            </button>
          </div>
        </div>

      </div>
    </form>
  )
}
