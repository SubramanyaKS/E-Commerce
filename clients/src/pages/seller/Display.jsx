import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './seller.css';
import { useNavigate } from "react-router";

const Display=({name,price,category,color,description,image,id})=>{
  const navigate= new useNavigate();
  const AddCart=()=>{
    let u = sessionStorage.getItem("uAuthenticated");
    if(u){
      alert("added");
    }
    else{
      navigate("/login");
    }
    
  }
    return(
        <div class="mb-3">
            
        <Card style={{ width: '25rem', height:'35rem' }}>
        <Card.Img style={{height:'10rem'}} variant="top" src={image} />
        <Card.Body>
          {/* {image} */}
        <Card.Title>{name}</Card.Title>
        <br/>
        <Card.Text>
          <b>Description:</b>{description}
        </Card.Text>
        <Card.Text><b>Category: </b>{category}</Card.Text>
        <Card.Text><b>Color: </b>{color}</Card.Text>
        <Card.Text><b>Price: </b>{price}</Card.Text>
        <Button onClick={AddCart} variant="primary">Delete</Button>
        <Button onClick={AddCart} variant="primary">Update</Button>
      </Card.Body>
    </Card>
        </div>

    );

}
export default Display;