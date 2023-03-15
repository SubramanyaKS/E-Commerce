import React from 'react'
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Index from './pages';
import About from './pages/About';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';

function Routing() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        {/* <Route path="/carts" element={<Carts/>} /> */}
        <Route path="/" element={<Index />}/>
        <Route path="/home" element={<Index />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default Routing