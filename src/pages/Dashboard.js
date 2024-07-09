import React from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import Home from '../Components/Home'
import Footer from '../Components/Footer'
import '../App.css'

const Dashboard = () => {
  return (
    <div className='grid-container'>
      <Header />
      <Sidebar />
      <Home />
      <Footer />
    </div>
  )
}

export default Dashboard