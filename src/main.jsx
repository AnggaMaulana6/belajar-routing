import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import About from './About'
import Navbar from './Navbar'
import Team from './Team'
import Portofolio from './Portofolio'
import Contact from './Contact'
import './index.css'
import {BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path='/' element = { <App />}></Route>
        <Route path='/about' element = { <About />}></Route>
        <Route path='/team' element = { <Team />}></Route>
        <Route path='/portofolio' element = { <Portofolio />}></Route>
        <Route path='/contact' element = { <Contact />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
