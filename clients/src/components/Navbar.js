import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {FaShoppingCart} from '@react-icons/all-files/fa/FaShoppingCart'
import {FcSearch} from '@react-icons/all-files/fc/FcSearch';
import 'bootstrap/dist/css/bootstrap.css';
const NavBar =()=>{
  /*const LogoutU=()=>{
    sessionStorage.removeItem('uid');
    sessionStorage.removeItem('uAuthenticated');
    window.location.href = "/home";
}*/
    return(
        
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                
                <Navbar.Brand style={{fontFamily:"cursive"}} href="/home"><FaShoppingCart style={{ color: 'white'}}/> Namma nadu kart</Navbar.Brand>
                
                <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success"><FcSearch/></Button>
          </Form>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Signup</Nav.Link>
            <Nav.Link href="/seller">Seller</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
        
            </Container>
        </Navbar>
        
    )
}
export default NavBar;