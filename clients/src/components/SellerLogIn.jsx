import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import './css/Login.css';
import { Row } from "react-bootstrap";
import {FaUser} from '@react-icons/all-files/fa/FaUser';
import { useState} from 'react';
import axios from 'axios';
const SellerLogin=()=>{
    const [error, setError]=useState({emailError:"",passwordError:" "});
    const [seller, setSeller] = useState({ email: "", password: ""});
    const [errorMsg, setErrorMsg] = useState("");
    const [valid, setValid]=useState(false);
    
    const sellerLogin= async (event)=>{
      event.preventDefault();
      await axios.post("http://localhost:4000/seller/",seller)
      .then((res)=>{
        console.log(res.data);
        if(res.data){
          sessionStorage.setItem("sid",seller.email);
        sessionStorage.setItem("sAuthenticated",true);
        window.location.href = "/seller";
        }
        else{
          setErrorMsg("Enter Valid Credentials");
        }
      })

    }
    const handleChange = (event) => {
      setSeller({ ...seller, [event.target.name]: event.target.value })
      if(seller.email.length()>0 && seller.password.length()>0){
        setValid(true);
      }
      else if(seller.email.length()<0){
        setError({...error,emailError:"Enter Valid Email"});
      }
      else{
        setErrorMsg("Enter valid Credential");
      }
      
    }
  
    return (
      <div className="login">
          <h3 style={{textAlign:"center"}}>Login Seller</h3><br/>
          <Row className="justify-content-center">
        <Card  border="primary" style={{ width: '20em',backgroundColor:"aqua",alignContent:"center" }}>
          <Card.Body>
          <FaUser style={{fontSize:"50px", alignContent:"center",marginLeft:"45%" }}/><br/><br/>
            <Form onSubmit={sellerLogin}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Seller Email</Form.Label>
                <Form.Control name="email" value={seller.email}  required onChange={handleChange} type="text" placeholder="Enter User Id" />
                <Form.Text className="text-muted">
               {error.emailError}
                </Form.Text>
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" value={seller.password} onChange={handleChange} type="password" placeholder="Password" />
              <Form.Text className="text-muted"> {error.passwordError}</Form.Text>
              </Form.Group>
  
              <Button disabled={!valid} value="Submit" className="button" variant="primary" type="submit">
                Submit
              </Button>
              {(errorMsg) ? <p style={{color:"red"}}>{errorMsg}</p> : null}
            </Form>
            <p>Not Registeried? <a href="/seller-signup">Register</a></p>
          </Card.Body>
        </Card>
        </Row>
      </div>
    );
}
export default SellerLogin;