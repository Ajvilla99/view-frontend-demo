import React, { useState } from 'react';
import { IoSettingsOutline, IoHeartOutline, IoCartOutline, IoExitOutline, IoFolderOutline, IoMenu, IoMenuOutline, IoMoon, IoMoonOutline, IoPieChartOutline, IoGridOutline, IoPersonOutline, IoChatboxOutline, IoThermometerSharp, IoCalendarOutline, IoShieldCheckmarkOutline, IoWarningSharp, IoWarningOutline, IoFootstepsOutline, IoLocationOutline, IoPersonAddOutline, IoMenuSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { SidebarLink } from './SidebarLink';
import { DarkModeToggleButton } from '../../../components';

const sidebarMenu = [
  { id: 'menu_01', to: '/dashboard', title: 'dashboard', icon: <IoGridOutline size={24} /> },
  { id: 'menu_02', to: '/parametrizacion-sede', title: 'Parametrización de sede', icon: <IoPersonOutline size={24} /> },
  { id: 'menu_03', to: '/panel-eventos', title: 'panel de eventos', icon: <IoCalendarOutline size={24} /> },
  { id: 'menu_04', to: '/indicadores', title: 'indicadores', icon: <IoPieChartOutline size={24} /> },
  { id: 'menu_05', to: '/control-rondas', title: 'control de rondas', icon: <IoShieldCheckmarkOutline size={24} /> },
  { id: 'menu_06', to: '/mapa-calor', title: 'mapa de calor', icon: <IoThermometerSharp size={24} /> },
  { id: 'menu_07', to: '/matriz-riesgo', title: 'matriz de riesgo', icon: <IoWarningOutline size={24} /> },
  { id: 'menu_08', to: '/panel-recomendaciones', title: 'panel de recomendaciones', icon: <IoPersonAddOutline size={24} /> },
  { id: 'menu_09', to: '/localizacion-movil', title: 'localización móvil', icon: <IoLocationOutline size={24} /> },
  { id: 'menu_010', to: '/panel-visitas', title: 'panel de visitas', icon: <IoFootstepsOutline size={24} /> },
];


export const Sidebar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header 
      className={`bg-primary text-white h-full flex flex-col justify-between items-center transition-all duration-150 ease-in
                  ${ isMenuOpen ? 'w-20' : 'w-80' }`}>

        <div className='w-full'>

          <div className='w-full flex items-center justify-center p-2.5'>
            <div className='w-full flex items-center justify-between'>
              <div className={`pl-2.5 ${ isMenuOpen && 'hidden' } cursor-default`}>
                  D&Y C
              </div>
              <button
                onClick={toggleMenu}
                className='p-4'>
                <IoMenu size={25}/>
              </button>
            </div>
          </div>


          <nav className='text-white px-2.5'>
            {
              sidebarMenu.map( item => (
                <SidebarLink
                  isMenuOpen={isMenuOpen}
                  { ...item }
                />
              ))
            }
          </nav>
        </div>


        
        <div className='w-full'>
          <span className='w-full bg-white/40 h-[1px] flex my-2.5' />
            <div className='w-full px-2.5 pb-2.5 flex flex-col gap-2.5'>
              <Link to={'/'} className='bg-red-600/60 w-full h-14 rounded-md flex p-3 items-center justify-center capitalize hover:bg-red-500/60 transition-all'>
                  <div className={`w-full flex ${ isMenuOpen ? 'justify-center' : 'justify-between' }`}>
                    <div className={`${ isMenuOpen && 'hidden' }`}>
                      cerrar session
                    </div>
                    <div>
                      <IoExitOutline size={25}/>
                    </div>
                  </div>
              </Link>
              <div className='flex h-14 p-3 bg-blue-300/20 rounded-md items-center justify-between'>
                <div className={`w-full flex ${ isMenuOpen ? 'justify-center' : 'justify-between' }`}>
                  <span className={`${ isMenuOpen && 'hidden' }`}>{ !isDarkMode ? 'Modo Claro' : 'Modo Oscuro' }</span>
                  <button
                    onClick={()=>setIsDarkMode(!isDarkMode)}
                    className='w-10 h-5 px-1 bg-slate-50 rounded-xl'>
                      <div className={`bg-primary/90 w-4 h-4 rounded-full transition-all duration-200 ${ isDarkMode ? 'translate-x-4':''}`}/>
                  </button>
                </div>
              </div>
            </div>
        </div>
    </header>
  )
}
