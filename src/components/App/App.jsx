import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom';

import Home from './../Home/Home'
import Contact from './../Contact/Contact'
import Skills from './../Skills/Skills'
import Projects from './../Projects/Projects'
import About from './../About/About'

import './../../components/App/App.css'
import NavBar from '../NavBar/NavBar';


const App = () => {
  return (
    <div>

      <HashRouter>
        <div>
          <NavBar />
          <Routes >

            <Route path="/" element={<Home />} />

            <Route path="/About" element={<About />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />

          </Routes>


        </div>


      </HashRouter>


    </div>
  )
}

export default App;

