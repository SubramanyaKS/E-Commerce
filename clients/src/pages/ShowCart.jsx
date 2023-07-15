import React from 'react'
import { CartState } from '../context/ShopContext';

const ShowCart = () => {
    const{cart} = CartState();
  return (
    <div>
       <p> {cart.title}</p>
       <p>{}</p>
    </div>
  )
}

export default ShowCart