import React from 'react'
import { CartState } from '../context/ShopContext';

const ShowCart = () => {
    const{cart} = CartState();
  return (
    <div>ShowCart
       <p> {cart.title}
        </p>
    </div>
  )
}

export default ShowCart