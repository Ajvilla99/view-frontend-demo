
import { DashboardPage, HomePage } from '../app/pages';
import { Route, Routes, useLocation } from 'react-router-dom';
import { LoginPage } from '../auth/pages/login/LoginPage';
import { Sidebar, TopMenu } from '../ui';

export const AppRouter = () => {

  const location = useLocation();

  // Mostrar Sidebar y TopMenu solo si la ruta es /dashboard o sus subrutas
  const isDashboardRoute = location.pathname.startsWith('/dashboard');

  return (
    <div className='w-screen h-screen flex overflow-hidden'>
      { isDashboardRoute && <Sidebar/> }
      <div className='w-full h-full'>
      { isDashboardRoute && <TopMenu/>}
          <div className='w-full h-full p-2.5'>
            <Routes>
                <Route path='/' element={ <LoginPage/> } />
                <Route path='/home' element={ <HomePage/> } />
                <Route path='/dashboard/' element={ <DashboardPage/> } />
            </Routes>
          </div>
        </div>
    </div>
  )
}
