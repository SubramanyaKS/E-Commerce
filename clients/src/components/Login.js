import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import './css/Login.css';
import { Row } from "react-bootstrap";
import {FaUser} from '@react-icons/all-files/fa/FaUser';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Login = () => {
  const [user, setUser] = useState([]);
  const [error, setError]=useState({idError:"",passwordError:" "});
  const [users, setUsers] = useState({ id: "", password: ""});
  const [errorMsg, setErrorMsg] = useState("");
  const [valid, setValid]=useState(false);
  useEffect(() => {
    axios.get("http://localhost:4000/users")
      .then((response) => { setUser(response.data) })
      .catch((error) => { console.log(error) })
  }, [])

  function login(event){
    event.preventDefault();
    console.log("User",users.password);
    if(users.password.length<=0){
      console.log("User",users.password);
      console.log("Error",error.passwordError)
      error.passwordError="Password is Required"
      console.log("Error",error.passwordError)

      setError({...error,[error.passwordError]:error.passwordError});
    }else{
    console.log("Error",error.passwordError)

    var id=users.id;
    console.log(id);

    var password = users.password;
    console.log(password);

    let emp = user.find(
      function (el) {

        console.log(el.id);
        return (String(el.id) === id && String(el.password)===password);
        
      }  
    )
    console.log(emp!=null);
    if(emp!=null){
      sessionStorage.setItem("uid",id);
      sessionStorage.setItem("uAuthenticated",true);
      window.location.href = "/userHome";
    }
    else{
      setErrorMsg("Invalid Credentials");
    }
  }
  }
  const handleChange = (event) => {
    setUsers({ ...users, [event.target.name]: event.target.value })
    if(users.id.length>0 && users.password.length>0){
      setValid(true);
    }
    
  }

  return (
    <div className="login">
        <h3 style={{textAlign:"center"}}>Login User</h3><br/>
        <Row className="justify-content-center">
      <Card  border="primary" style={{ width: '20em',backgroundColor:"aqua",alignContent:"center" }}>
        <Card.Body>
        <FaUser style={{fontSize:"50px", alignContent:"center",marginLeft:"45%" }}/><br/><br/>
          <Form onSubmit={login}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>UserId</Form.Label>
              <Form.Control name="id" value={users.id}  required onChange={handleChange} type="text" placeholder="Enter User Id" />
              <Form.Text className="text-muted">
             {error.idError}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" value={users.password} onChange={handleChange} type="password" placeholder="Password" />
            <Form.Text className="text-muted"> {error.passwordError}</Form.Text>
            </Form.Group>

            <Button disabled={!valid} value="Submit" className="button" variant="primary" type="submit">
              Submit
            </Button>
            {(errorMsg) ? <p style={{color:"red"}}>{errorMsg}</p> : null}
          </Form>
        </Card.Body>
      </Card>
      </Row>
    </div>
  );
};
export default Login;
