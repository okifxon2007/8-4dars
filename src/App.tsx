import { useState } from 'react'
import Header from './components/header/Header'
import Main from './components/main/Main'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Onepage from './pages/Onepage'
import Twopage from './pages/Twopage'
import Threepage from './pages/Threepage'
import Forpage from './pages/Forpage'
import Fifepage from './pages/Fifepage'
import Footerpage from './pages/Footerpage'
function App() {
     
  return (
    <>
         
      <Routes>
        <Route path='/' element={<Onepage></Onepage>}></Route>
        <Route path='/twopage' element={<Twopage></Twopage>}></Route>
        <Route path='/threepage' element={<Threepage></Threepage>}></Route>
        <Route path='/forpage' element={<Forpage></Forpage>}></Route>
        <Route path='/fifepage' element={<Fifepage></Fifepage>}></Route>
        <Route path='/footerpage' element={<Footerpage></Footerpage>}></Route>
        </Routes>  
    </>
  )
}

export default App
