import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router";
import '../assets/css/index.css';
import { CartState } from '../context/ShopContext';
const CartCard = ({article}) => {
  const {count,setCount}= CartState();
    const navigate= new useNavigate();
  return (
    <Card style={{ width: '25rem', height:'35rem' }}>
         <Card.Img style={{height:'10rem'}} variant="top" src={article.image} />
          <Card.Body>
          <Card.Title>{article.name}</Card.Title>
          <br/>
          <Card.Text>
            <b>Description:</b>{article.description}
          </Card.Text>
          <Card.Text><b>Category: </b>{article.category}</Card.Text>
          <Card.Text><b>Color: </b>{article.color}</Card.Text>
          <Card.Text><b>Price: Rs. </b>{article.price}</Card.Text>
           <Button value="Submit" type="submit" onClick={()=>{setCount((prev)=>prev+1);navigate(`/addtocart/${article.id}`)}}></Button>
        </Card.Body>
    </Card>
  )
}

export default CartCard;