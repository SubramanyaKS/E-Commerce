import React from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import { Row } from 'react-bootstrap';
import { useState  , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const AddProduct = () => {
  const navigate = useNavigate();
const [product,setProduct]= useState({
  name:"",
  price:"",
  category: "",
  color: "",
  description:"",
  image:"",
})
useEffect(() => {
  axios
    .get("http://localhost:4000/products")
    .then((response) => {
      setProduct(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);


  const ProductAdd= async (event)=>{
    event.preventDefault();
    await axios.post("http://localhost:4000/products/",product)
    .then((res)=>{
        navigate('/seller');
      }
      
    )};
    const handleChange = (event) => {
      setProduct({ ...product, [event.target.name]: event.target.value });
    };

  return (
    <div className="product-form">
        <h3 style={{textAlign:"center"}}>Add Product</h3><br/>
        <Row className="justify-content-center">
        <Card
          border="primary"
          style={{
            width: "30em",
            backgroundColor: "aqua",
            alignContent: "center",
          }}
        >
            <Card.Body>
        <Form onSubmit={ProductAdd}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product name</Form.Label>
        <Form.Control name="name" value={product.name} onChange={handleChange} type="text" placeholder="Enter Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control name="price" value={product.price} onChange={handleChange} type="text" placeholder="Enter Price" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Category</Form.Label>
        <Form.Control name="category" onChange={handleChange} value={product.category} type="text" placeholder="Enter category" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Color</Form.Label>
        <Form.Control name="color" value={product.color} onChange={handleChange} type="text" placeholder="Enter color" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control name="description"  onChange={handleChange} value={product.description} as="textarea" rows={3} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Image Link</Form.Label>
        <Form.Control name="image" value={product.image} onChange={handleChange} type="text" placeholder="Enter link" />
      </Form.Group>

      <Button className="text-center" variant="primary" value="Submit" type="submit">
        Submit
      </Button>
    </Form>
    </Card.Body>
    </Card>
    </Row>
      
    </div>
  )
}

export default AddProduct;
