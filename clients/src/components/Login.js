import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import './css/Login.css';
import { Row } from "react-bootstrap";
import {FaUser} from '@react-icons/all-files/fa/FaUser';
import { useState} from 'react';
import axios from 'axios';

const Login = () => {
  //const [user, setUser] = useState([]);
  const [error, setError]=useState({idError:"",passwordError:" "});
  const [users, setUsers] = useState({ userID: "", password: ""});
  const [errorMsg, setErrorMsg] = useState("");
  const [valid, setValid]=useState(false);
  const userLogin= async (event)=>{
    event.preventDefault();
    await axios.post("http://localhost:4000/users/login",users)
    .then((res)=>{
      console.log(res.data);
      if(res.data){
        sessionStorage.setItem("uid",users.userID);
      sessionStorage.setItem("uAuthenticated",true);
      window.location.href = "/home";
      }
    })
    //UI-0000
    //Subbu@123
    //   method:"POST",
    //   body:users,
    //   headers:{
    //     'Content-Type':'application/json',
    //     "Access-Control-Allow-Origin": "*"
    //   }
    // });
    // console.log("Result",result);
  }
  const handleChange = (event) => {
    setUsers({ ...users, [event.target.name]: event.target.value })
    if(users.userID.length>0 && users.password.length>0){
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
          <Form onSubmit={userLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>UserId</Form.Label>
              <Form.Control name="userID" value={users.userID}  required onChange={handleChange} type="text" placeholder="Enter User Id" />
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
          <p>Not Registeried? <a href="/signup">Register</a></p>
        </Card.Body>
      </Card>
      </Row>
    </div>
  );
};
export default Login;
