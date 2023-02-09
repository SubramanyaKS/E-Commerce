import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {FaShoppingCart} from '@react-icons/all-files/fa/FaShoppingCart'
import {FcSearch} from '@react-icons/all-files/fc/FcSearch';
import 'bootstrap/dist/css/bootstrap.css';
import { LogoutS } from '../util/helper';

const NavBar =()=>{
  let sa = sessionStorage.getItem('sid');
  let ua = sessionStorage.getItem('uid');
 
    return(
        
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
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
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
            
            {sa?<>
            <Nav.Link href="/addproduct">Add Product</Nav.Link>
              <Nav.Link style={{textDecoration: "none"}}  onClick={LogoutS}> Log Out </Nav.Link>
            </>:<>
            <Nav.Link href="/carts">Carts</Nav.Link>
            <Nav.Link href="/items" >Item</Nav.Link>
            {/* <Nav.Link href="/cart">Cart <p  style={{display:'inline-flex'}}className="add-cart">3</p></Nav.Link> */}
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Signup</Nav.Link>
            <Nav.Link href="/seller">Seller</Nav.Link>
            
            </>
            }
          </Nav>
          
        </Navbar.Collapse>
        
            </Container>
        </Navbar>
        
    )
}
export default NavBar;