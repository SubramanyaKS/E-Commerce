import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './css/index.css';
import { useNavigate } from "react-router";
import {useCart } from "react-use-cart";
import CartItem from "./CartItem";



const Index = ()=>{
    const [product,setProduct] =useState([]);
    let quantity=0;
    // useEffect(()=>{
    //     axios.get("http://localhost:4000/products")
    //     .then((res)=>{
    //         console.log(res.data);
    //         setProduct(res.data);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // },[]);
    useEffect(() => {
        const news = async () => {
          axios
            .get("http://localhost:4000/products/")
            .then((response) => {
              setProduct(response.data);
              console.log(response.data);
            })
            .catch((error) => {
              console.log(error);
            });
        };
        console.log("News",news());
      }, []);

      const navigate= new useNavigate();
  const { addItem } = useCart();
  
  const AddCart=({article})=>{
    let u = sessionStorage.getItem("uAuthenticated");
    let ua =Boolean(u);
    if(ua){
      return(<CartItem article={article} />);
      //addItem(article);
    }
    else{
      navigate("/login");
    }
    
  }

    return(
        <>
        <h1 style={{textAlign:"center"}}>Welcome to Namma Nadu Kart</h1>
        <div style={{ display: "flex", flexWrap: "wrap"}}>
        {product.map((article) => (
         
         <div className="mb-3" key={article.id}>
            <Card style={{ width: '25rem', height:'35rem' }}>
            <Card.Img style={{height:'10rem'}} variant="top" src={article.image} />
          <Card.Body>
            {/* {image} */}
          <Card.Title>{article.name}</Card.Title>
          <br/>
          <Card.Text>
            <b>Description:</b>{article.description}
          </Card.Text>
          <Card.Text><b>Category: </b>{article.category}</Card.Text>
          <Card.Text><b>Color: </b>{article.color}</Card.Text>
          <Card.Text><b>Price: Rs. </b>{article.price}</Card.Text>
          <input text="number" value={quantity} name="quantity" /><br></br>
          {quantity===0?
          <Button value="Submit" type="submit" onClick={()=>AddCart(article)} variant="primary">Add to Cart</Button>
          :null}
        </Card.Body>
      </Card>
      
          </div>
        ))}
       </div>
        
        </>
    );

}
export default  Index;