import React from 'react'

export const TopMenu = () => {
  return (
    <div className='w-full'>
      <div className='w-full h-full p-3 bg-primary flex items-center justify-center gap-10'>
        <div className='text-white p-3 flex items-center'>
          Menu: Ubicacion
        </div>
        <div className='text-white p-3 flex items-center'>
          Sector: Sector 1
        </div>
        <div className='text-white p-3 flex items-center'>
          Cliente: Cliente 3
        </div>
        <div className='text-white p-3 flex items-center'>
          Region: Region 3
        </div>
      </div>
    </div>
  )
}
