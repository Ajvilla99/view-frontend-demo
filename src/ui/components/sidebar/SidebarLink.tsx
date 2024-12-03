import React, { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  to: string;
  icon: ReactNode;
  isMenuOpen: boolean;
  title: string;
}

export const SidebarLink = ({ icon, isMenuOpen, to, title }: Props) => {
  return (
    <Link
      to={to}
      className={`w-full h-14 flex items-center justify-center hover:bg-white hover:text-primary rounded-md
                  ${ !isMenuOpen && '' }`}
    >
      <div className='w-full flex items-center gap-5 px-2.5'>
        <div className={`${ isMenuOpen && 'w-full h-full flex items-center justify-center' }`}>
          { icon }
        </div>
        
        <p className={`capitalize ${ isMenuOpen && 'hidden' }`}>
          { title }
        </p>
      </div>
    </Link>
  )
}
