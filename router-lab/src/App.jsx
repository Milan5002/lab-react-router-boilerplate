import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import NavBar from './components/NavBar'
import { Routes,Route } from 'react-router-dom'
import Pagenotfound from './Pagenotfound'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='*' element={<Pagenotfound/>}/>
    </Routes>
    </>
  )
}

export default App
