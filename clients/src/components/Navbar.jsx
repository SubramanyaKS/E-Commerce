import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import {FaShoppingCart} from '@react-icons/all-files/fa/FaShoppingCart'
// import {FcSearch} from '@react-icons/all-files/fc/FcSearch';
import 'bootstrap/dist/css/bootstrap.css';
import StoreIcon from '@mui/icons-material/Store';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { CartState } from '../context/ShopContext';
const NavBar =()=>{
  const {count} = CartState();
  console.log(typeof count,"",count);
    return(
        
        <Navbar className="shadow-lg p-3 mb-5" sticky="top" collapseOnSelect expand="lg" bg="white" variant="dark">
            <Container>
                
                <Navbar.Brand style={{fontFamily:"cursive",color:"black"}} href="/home"><StoreIcon style={{ color: 'black'}}/> Namkart</Navbar.Brand>
                
                {/* <Form className="d-flex"> */}
            {/* <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success"><FcSearch/></Button>
          </Form> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
          <Nav>
          <Nav.Link style={{color:"white",backgroundColor:"black", margin:"1px"}} href="/home">Home</Nav.Link>
          <Nav.Link style={{color:"white",backgroundColor:"black", margin:"1px"}} href="/about">About</Nav.Link>
          <Nav.Link style={{color:"white",backgroundColor:"black", margin:"1px"}} href="/contact">Contact</Nav.Link>
          <Nav.Link><Badge badgeContent={count} color="primary">
      <ShoppingCartIcon  style={{ color: 'black'}} />
    </Badge></Nav.Link>
           
            
    
          </Nav>
          
        </Navbar.Collapse>
        
            </Container>
        </Navbar>
        
    )
}
export default NavBar;