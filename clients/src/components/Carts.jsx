import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


const Carts = () => {
  const [cartItem, setCartItem] = useState();
  useEffect(() => {
    let u = sessionStorage.getItem("uid");
    console.log("User", u);
    let ua= Number(u);
    if (ua>0) {
      axios.get(`http://localhost:4000/carts?userId=${ua}`).then((res) => {
        setCartItem(res.data);
        console.log(res.data);
        console.log("Hi",cartItem);
      });
    }
  });
  return (
     <div>
       {cartItem.map((article) => (
        <div key={article.id}>
          {/* <p>{article.userId}</p>
          <p>{article.name}</p> */}
          <Card>
            <Card.Body>
              <Card.Title>{article.name}</Card.Title>
              <Card.Text>
                price: {article.price}
              </Card.Text>
              <Card.Text>
                Quantity: {article.quantity}
              </Card.Text>
              <Card.Text>
                price: {article.price}
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
    
      ))}
      <p>Hi</p>
    </div>
    
  );
};

export default Carts;
