import React, {useState} from 'react'
import { useParams } from 'react-router-dom';
import { ProductState } from '../context/ProductContext';
import { Button, Card } from 'react-bootstrap';
import { CartState } from '../context/ShopContext';
// import ProductCard from '../components/ProductCard';


const AddToCart = () => {
  const [quantity, setQuantity] = useState(1);
  const {product} = ProductState();
  const {cart,setCart} = CartState();
    let {id} = useParams();

    const AddedCart=({name,price,quantity})=>{
        setCart({articlename:name,price:price,quantity:quantity})
        console.log(cart);
      }
    
  return (
    <section >
        <h5>Add to cart</h5>
        {product.map((article)=>(
            <div className="mb-3" key={article.id}>
          {String(article.id)===id?
          <Card style={{display:"flex",flexDirection:"row"}}>
            <Card.Body >
              <Card.Text><b>{article.title}</b></Card.Text>
              <Card.Text>${article.price*quantity}</Card.Text>
              <div style={{display:"flex",flexDirection:"row"}}>
                <Button onClick={()=>setQuantity(quantity+1)}>+</Button>
                <p>{quantity}</p>
                <Button onClick={()=>setQuantity(quantity-1)}>-</Button>
              </div>
              <Button style={{marginTop:"10px"}} onClick={()=>AddedCart(article.name,article.price,quantity)}>Added</Button>
            </Card.Body>
          </Card>
          :null}
          </div>))}
          <p>{cart.articlename}</p>
        {/* <ProductCard article={data}/> */}
        
    </section>
  )
}

export default AddToCart;