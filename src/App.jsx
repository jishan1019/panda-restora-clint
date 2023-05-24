import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './component/ShareLayout/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}

export default App
