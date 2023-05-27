
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './component/ShareLayout/Footer/Footer'
import Header from './component/ShareLayout/Header/Header'

function App() {

  const location = useLocation();

  const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('regestation');;

  return (
    <>
      {noHeaderFooter || <Header />}
      <div className='min-h-[calc(100vh-200px)]'>
        <Outlet />
      </div>
      {noHeaderFooter || <Footer />}
    </>
  )
}

export default App
