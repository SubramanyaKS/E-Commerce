import React from 'react'
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Index from './pages';
import About from './pages/About';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import AddToCart from './pages/AddToCart';
import ErrorPage from './pages/ErrorPage';
import SingleProduct from './pages/SingleProduct';
function Routing() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/home" element={<Index />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/addtocart/:id" element={<AddToCart/>}/>
        <Route path="/singleproduct/:id" element={<SingleProduct/>}/>
        <Route path ="*" element ={<ErrorPage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default Routing