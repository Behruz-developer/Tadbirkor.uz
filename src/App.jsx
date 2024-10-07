import React from 'react'
import Nav from './Components/Nav/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeLayout from './Pages/HomeLayout'
import Home from './Pages/Home'
import About from './Pages/About'
import Business from './Pages/Business'
import Founder from './Pages/Founder'
import Contact from './Pages/Contact'
import Department1 from './Pages/Department1'
import Department2 from './Pages/Department2'
import Department3 from './Pages/Department3.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/business' element={<Business />} />
          <Route path='/interview' element={<Founder />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/deportment1' element={<Department1 />} />
          <Route path='/deportment2' element={<Department2 />} />
          <Route path='/deportment3' element={<Department3 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App