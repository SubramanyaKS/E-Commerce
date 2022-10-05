import { BrowserRouter, Routes,Route} from 'react-router-dom';
import './App.css';
import Index from './components';
import About from './components/About';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/about" element={<About />}/>
        
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
