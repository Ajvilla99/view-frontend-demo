import { Link } from 'react-router-dom';

export const LoginPage = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center'>
      <div>LoginPage</div>
      <Link to={'/home'}
        className='bg-slate-900 p-3 rounded-md text-white'
      >
        Iniciar Sesion
      </Link>
    </div>
  )
}
