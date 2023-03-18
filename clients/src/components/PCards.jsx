import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const PCards = ({article}) => {
  const navigate = useNavigate();
  return (
    <Card style={{ width: '25rem', height:'20rem' }}>
      <Card.Img style={{height:'10rem', width:'20rem'}} variant="top" src={article.image} />
      <Card.Body>
      <Card.Title>{article.name}</Card.Title>
      <Card.Text><b>Price: Rs. </b>{article.price}</Card.Text>
      <Button value="Submit" type="submit" onClick={()=>navigate(`/singleproduct/${article.id}`)}>Show Details</Button>
      </Card.Body>
    </Card>
  )
}

export default PCards;