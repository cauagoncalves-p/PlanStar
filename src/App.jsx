import { useState } from 'react'
import Home from './pages/Home/Home'
import About from "./pages/Sobre/Sobre"
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Contato from './pages/Contato/Contato'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/sobre" element={<About/>}/>
      <Route path="/contato" element={<Contato/>}/>
    </Routes>
  )
}

export default App
