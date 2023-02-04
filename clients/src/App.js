import { BrowserRouter, Routes,Route} from 'react-router-dom';
import './App.css';
import Index from './components';
import About from './pages/About';
import Footer from './components/Footer';
import Login from './components/Login';
import NavBar from './components/Navbar';
import SignUp from './components/SignUp';
import SellerHome from './components/SellerHome';
import UserSucess from './components/UserSucess';
import 'bootstrap/dist/css/bootstrap.css';
import SellerLogin from './components/SellerLogIn';
import SellerSignUp from './components/SellerSignUp';

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
        <Route path="/seller" element={<SellerHome/>}/>
        <Route path="/seller-login" element={<SellerLogin/>}/>
        <Route path="seller-signup" element={<SellerSignUp/>} />
        <Route path="/signup" element={<SignUp />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;