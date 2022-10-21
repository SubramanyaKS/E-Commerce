import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import "./css/Login.css";
import { Row } from "react-bootstrap";
import { FaUser } from "@react-icons/all-files/fa/FaUser";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { Radio, RadioGroup } from "react-radio-group";

const SignUp = () => {
  const [user, setUser] = useState([]);
  const [users, setUsers] = useState({
    name: "",
    password: "",
    gender: "",
    dateOfBirth: "",
    email: "",
    mobileNumber: "",
    pincode: "",
    city: "",
    state: "",
    country: "",
  });
  // const[display,setDisplay]=useState(false);
  const [formError, setFormError] = useState({
    nameerror: "",
    passworderror: "",
    emailerror: "",
    mobilenumbererror: "",
    dateOfBirtherror: "",
    cityError: "",
    stateError: "",
    countryError: "",
    pincodeError: "",
  });
  const [successMsg, setSuccesMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4000/users")
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleAddSubmit = async (event) => {
    event.preventDefault();
    var ed = new Date(users.dateOfBirth);
    var today = new Date();
    let adate = today.getFullYear() - ed.getFullYear();
    var pattern = new RegExp("^[A-Za-z0-9._]+@[a-z]+.com$");

    console.log(users.dateOfBirth);
    let error = "";

    if (users.name.length < 3 || users.name.length > 50) {
      setErrorMsg("Name should have 3 to 20 characters");
      formError.nameerror = "Name should have 3 to 20 characters";
    }
    if (!(users.password.length > 5 && users.password.length < 10)) {
      formError.passworderror = "	Password should have 5 to 10 characters";
      //setFormError(formError);
      error = "error";
    }
    if (users.mobileNumber.length !== 10) {
      formError.mobilenumbererror = "	Mobile Number should have 10 digits";
      //setFormError(formError);
      error = "error";
    }
    if (!users.email.match(pattern)) {
      formError.emailerror = "Enter a valid Email";
      //setFormError(formError);
      error = "error";
    }
    if (users.pincode.length !== 6) {
      formError.pincodeError = "Pincode should have 6 digits";
      //setFormError(formError);
      error = "error";
    }
    if (adate < 18) {
      formError.dateOfBirtherror = "	Mobile Number should have 10 digits";
      //setFormError(formError);
      error = "error";
    }
    if (!(users.city.length > 6 && users.city.length < 20)) {
      formError.cityError = "	City should have 6 to 20 characters";
      //setFormError(formError);
      error = "error";
    }
    if (!(users.country.length > 4 && users.country.length < 20)) {
      formError.countryError = "Country should have 6 to 20 characters";
      //setFormError(formError);
      error = "error";
    }
    if (!(users.state.length > 6 && users.state.length < 20)) {
      formError.stateError = "State should have 6 to 20 characters";
      //setFormError(formError);
      error = "error";
    }
//Maria@123
//UI-0013
    if (error !== "error") {
     await axios.post("http://localhost:4000/users/", users)
      
        .then((response) => {
          console.log("Hi res");
          
          console.log("Data:",response.data);
          console.log("User ID",response.data.userID);
          //setUser([...user, response.data]);
          navigate("/usersucess" ,{ state: { id: response.data.userID } });
          setSuccesMsg(
            "New Bookings has been added with the book id " + response.data.userID
          );
        })
        .catch((error) => {
          setErrorMsg(error);
        });
    }
    setFormError(formError);
    console.log(formError);
  };

  const handleChange = (event) => {
    setUsers({ ...users, [event.target.name]: event.target.value });
  };

  return (
    <div className="login">
      <h3 style={{ textAlign: "center" }}>Register User</h3>
      <br />
      <Row className="justify-content-center">
        <Card
          border="primary"
          style={{
            width: "20em",
            backgroundColor: "aqua",
            alignContent: "center",
          }}
        >
          <Card.Body>
            <FaUser
              style={{
                fontSize: "50px",
                alignContent: "center",
                marginLeft: "45%",
              }}
            />
            <br />
            <br />
            <Form onSubmit={handleAddSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  value={users.name}
                  placeholder="Enter Name"
                  onChange={handleChange}
                />
                <Form.Text className="text-muted">
                  {formError.nameerror.length > 0 ? (
                    <p style={{ color: "red" }}>{formError.nameerror}</p>
                  ) : null}
                </Form.Text>
              </Form.Group>

              <Form.Group className="basic" controlId="formBasicGender">
                <Form.Label className="label">Gender: </Form.Label>
                <br />
                <RadioGroup
                  value={users.gender}
                  className="label"
                  name="gender"
                >
                  <Radio
                    name="gender"
                    value="Male"
                    onChange={handleChange}
                    className="radio-button"
                  />
                  Male
                  <Radio
                    name="gender"
                    value="female"
                    onChange={handleChange}
                    className="radio-button"
                  />
                  Female
                </RadioGroup>
              </Form.Group>
              <br />

              <Form.Group className="basic" controlId="formBasicPhone">
                <Form.Label className="label">Mobile Number: </Form.Label>
                <br />
                <Form.Control
                  name="mobileNumber"
                  onChange={handleChange}
                  type="text"
                  value={users.mobileNumber}
                />
                <Form.Text className="text-muted">
                  {formError.mobilenumbererror.length > 0 ? (
                    <p style={{ color: "red" }}>
                      {formError.mobilenumbererror}
                    </p>
                  ) : null}
                </Form.Text>
              </Form.Group>

              <Form.Group className="basic" controlId="formBasicDate">
                <Form.Label className="label">Date of Birth: </Form.Label>
                <br />
                <Form.Control
                  name="dateOfBirth"
                  onChange={handleChange}
                  type="date"
                />
                <Form.Text className="text-muted">
                  {formError.dateOfBirtherror.length > 0 ? (
                    <p style={{ color: "red" }}>{formError.dateOfBirtherror}</p>
                  ) : null}
                </Form.Text>
              </Form.Group>

              <Form.Group className="basic" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" value={users.email} onChange={handleChange} placeholder="Enter email" />
                <Form.Text className="text-muted">{formError.emailerror.length>0?<p style={{"color":"red"}}>{formError.emailerror}</p>:null}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={users.password} onChange={handleChange} placeholder="Password" />
                <Form.Text className="text-muted">{formError.passworderror.length>0?<p style={{"color":"red"}}>{formError.passworderror}</p>:null}
                </Form.Text>
              </Form.Group>

              <Form.Group className="basic" controlId="formBasicCity">
                  <Form.Label className="label">City: </Form.Label><br />
                  <Form.Control name="city" value={users.city} onChange={handleChange} type="text" />
                  <Form.Text className="text-muted">{formError.cityError.length>0?<p style={{"color":"red"}}>{formError.cityError}</p>:null}
                  </Form.Text>
                </Form.Group>

                <Form.Group className="basic" controlId="formBasicPin">
                  <Form.Label className="label">PinCode: </Form.Label><br />
                  <Form.Control name="pincode" value={users.pincode} onChange={handleChange} type="number" />
                  <Form.Text className="text-muted">{formError.pincodeError.length>0?<p style={{"color":"red"}}>{formError.pincodeError}</p>:null}
                  </Form.Text>
                </Form.Group>

                <Form.Group className="basic" controlId="formBasicState">
                  <Form.Label className="label">State: </Form.Label><br />
                  <Form.Control name="state" value={users.state} onChange={handleChange} type="text" />
                  <Form.Text className="text-muted">{formError.stateError.length>0?<p style={{"color":"red"}}>{formError.stateError}</p>:null}
                  </Form.Text>
                </Form.Group>

                <Form.Group className="basic" controlId="formBasicCountry">
                  <Form.Label className="label">Country: </Form.Label><br />
                  <Form.Control  name="country" value={users.country} onChange={handleChange}type="text" />
                 <Form.Text className="text-muted"> {formError.countryError.length>0?<p style={{"color":"red"}}>{formError.countryErrors}</p>:null}
                </Form.Text>
                </Form.Group>

              <Button className="button" variant="primary" value="Submit" type="submit">
                Submit
              </Button>
              {(!successMsg) ? <div>{successMsg}</div> : null}
              {(!errorMsg) ? <div>{errorMsg}</div> : null}
            </Form>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
};
export default SignUp;
