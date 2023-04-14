import React from 'react'
import { useNavigate, useParams } from "react-router";
import '../assets/css/index.css';
import { ProductState } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';

const SingleProduct = () => {
    const {id}= useParams();
    // console.log(typeof id," ",id);
    const {product} = ProductState();
    // const navigate= useNavigate();
  return (
    <div>
        {product.map((article)=>(
            <div className="mb-3" key={article.id}>
          {String(article.id)===id?<ProductCard article={article}/>:null}
          </div>))}
          
    </div>
  )
}

export default SingleProduct