import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Home from './Components/Home'
import Footer from './Components/Footer'
import './App.css'


function App() {
  

  return (
    <div className='grid-container'>
      <Header />
      <Sidebar />
      <Home />
      <Footer />
    </div>
  )
}


export default App