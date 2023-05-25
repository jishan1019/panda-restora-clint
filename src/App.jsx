import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './component/ShareLayout/Footer/Footer'
import Header from './component/ShareLayout/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className='min-h-[calc(100vh-200px)]'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
