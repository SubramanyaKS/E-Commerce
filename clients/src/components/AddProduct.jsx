import React from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import { Row } from 'react-bootstrap';
const AddProduct = () => {
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
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product name</Form.Label>
        <Form.Control name="name" type="text" placeholder="Enter Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control name="price" type="text" placeholder="Enter Price" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Category</Form.Label>
        <Form.Control name="category" type="text" placeholder="Enter category" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Color</Form.Label>
        <Form.Control name="color" type="text" placeholder="Enter color" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control name="description" as="textarea" rows={3} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Image Link</Form.Label>
        <Form.Control name="image" type="text" placeholder="Enter link" />
      </Form.Group>

      <Button className="text-center" variant="primary" type="submit">
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
