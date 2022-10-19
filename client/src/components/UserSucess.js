import Button from "react-bootstrap/Button";
import { useLocation,useNavigate } from 'react-router-dom';
import { Row,Card } from "react-bootstrap";
import { FaUser } from "@react-icons/all-files/fa/FaUser";
import './css/sucess.css';

const UserSucess=()=>{
    const location = useLocation();
    const navigate = useNavigate();
    const navigateLogin = () => {
      // 👇️ navigate to /contacts
      navigate('/login');
    };

    return(
        <>
    
        <div className="main">
            <Row className="justify-content-center">
            <Card
          border="primary"
          style={{
            width: "20em",
            backgroundColor: "aqua",
            alignContent: "center",
          }}
         
        > <Card.Body>
            <FaUser
              style={{
                fontSize: "50px",
                alignContent: "center",
                marginLeft: "45%",
              }}
            />
            <h4 style={{color:"white"}}>Account Created Sucessfull</h4>
                <p>Your user id:{location.state.id} </p>
                <Button onClick={navigateLogin} className="button" variant="primary" type="submit" value="Submit">Login </Button><br/>
        </Card.Body>
        </Card>
        
            
        </Row>
        </div>
        </>
    );

}
export default UserSucess;