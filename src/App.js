import { BrowserRouter, Routes,Route} from 'react-router-dom';
import './App.css';
import Index from './components';
import About from './components/About';
import Footer from './components/Footer';
import Login from './components/Login';
import NavBar from './components/Navbar';
import SignUp from './components/SignUp';
import UserSucess from './components/UserSucess';
function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/usersucess" element={<UserSucess />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
