import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import axios from 'axios';

const Cart = () => {
  const {title} = useParams();
  const [product,setProduct] = useState([null]);

    useEffect(() => {
      const news = async () => {
        axios
          .get(`http://localhost:4000/products/${title}`)
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
  
  return (
    <h1>{title}</h1>
  )
}

export default Cart;