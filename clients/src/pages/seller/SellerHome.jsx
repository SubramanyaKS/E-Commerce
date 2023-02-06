import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './seller.css';
// import { fetchProduct } from "../../util/helper";
import axios from "axios";
//import Item from "../../components/Item";

const SellerHome=()=>{
    const[prod,setProd] = useState([]);
    const navigate= new useNavigate();
    useEffect(()=>{
       
        let p = sessionStorage.getItem("sAuthenticated");
        if(!p){
          navigate("/seller-login");
        }
      else{
        axios.get("http://localhost:4000/products")
        .then((response) => {
        console.log(response.data);
        setProd(response.data);
        
      })
      .catch((error) => {
        console.log(error);
      });
    }
    
    });

    const deleteProduct =(id)=>{
      let bId = parseInt(id);
      axios.delete('http://localhost:4000/products/'+bId)
      .then((res)=>{
        axios.get('http://localhost:4000/products')
        .then((res)=>{setProd(res.body);})
          
      });
    }
    
    
    return(<>
    <p>Hi Seller</p>   
        <div style={{ display: "flex", flexWrap: "wrap"}}>
        {prod.map((article) => (
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
          <Card.Text><b>Price: </b>{article.price}</Card.Text>
          <Button value='Submit' type="submit" onClick={()=>deleteProduct(article.id)} variant="primary">Delete</Button>
          
        </Card.Body>
      </Card>
          </div>
          
        ))}
       </div>
    </>);
}
export default SellerHome;