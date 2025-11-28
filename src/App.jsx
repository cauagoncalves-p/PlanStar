import './App.css'
import Home from './pages/Home/Home'
import About from "./pages/Sobre/Sobre"
import { Routes, Route } from 'react-router-dom'
import Contato from './pages/Contato/Contato'
import IconeWhastApp from './components/IconeWhastApp/IconeWhastApp'
import FormularioContatos from './pages/FormularioContatos/FormularioContatos'

function App() {
  return (
    <>
    <IconeWhastApp/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/sobre" element={<About/>}/>
      <Route path="/contato" element={<Contato/>}/>
      <Route path="/contatoForm" element={<FormularioContatos/>}/>
    </Routes>
    </>
    
  )
}

export default App
