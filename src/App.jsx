import { useState } from 'react'
import {Routes, Route} from "react-router-dom"


import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import Blogpage from './components/Blogpage'
import Projectspage from './components/Projectspage'

function App() {

  return (
    <div className="relative min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:id' element={<Projectspage />} />
        <Route path='/blog' element={<Blog />} />
         <Route path='/blog/:id' element={<Blogpage />}/>
        
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
      <div className=' absolute inset-0 -z-50 max-h-screen background-gradient'></div>
      <div className='absolute pointer-events-none inset-0 -z-40 h-full bg-[url("/noisetexture.jpg")] opacity-20 mix-blend-soft-light'></div>
    </div>
  );
}

export default App
