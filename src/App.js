import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Home from './Components/Home'
import Footer from './Components/Footer'
import './App.css'
import { useState } from 'react'


function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
      <Footer />
    </div>
  )
}


export default App