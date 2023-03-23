import React, {useState} from 'react'
import { useParams } from 'react-router-dom';
import { ProductState } from '../context/ProductContext';
import { Button, Card } from 'react-bootstrap';
// import ProductCard from '../components/ProductCard';


const AddToCart = () => {
  const [quantity, setQuantity] = useState(1);
  const {product} = ProductState();
    let {id} = useParams();
    
  return (
    <section>
        <h5>Add to cart</h5>
        {product.map((article)=>(
            <div className="mb-3" key={article.id}>
          {String(article.id)===id?
          <Card>
            <Card.Body style={{flexDirection:"row"}}>
              <Card.Text>{article.name}</Card.Text>
              <Card.Text>{article.price}</Card.Text>
              <div style={{flexDirection:"row"}}>
                <Button onClick={()=>setQuantity(quantity+1)}>+</Button>
                <p>{quantity}</p>
                <Button onClick={()=>setQuantity(quantity+1)}>-</Button>
              </div>
            </Card.Body>
          </Card>
          :null}
          </div>))}
        {/* <ProductCard article={data}/> */}
        
    </section>
  )
}

export default AddToCart;