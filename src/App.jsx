import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavigationBar from './Components/NavigationBar'
import HomePage from './Components/HomePage'
import About from './Components/About'
import Client from './Components/Client'
import Contact from './Components/Contact'
import Services from './Components/Services'
import Solution from './Components/Solution'
import Footer from './Components/Footer'

function App() {
  return (

    <>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/client' element={<Client />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/solution' element={<Solution />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
