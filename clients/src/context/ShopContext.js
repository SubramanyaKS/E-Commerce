import React, { createContext, useContext, useState } from 'react'

const Cart = createContext();


const ShopContext = ({children}) => {
    const [cart,setCart]= useState({articlename:'',price:'',quantity:''});
    
  return (
    <Cart.Provider value={{cart,setCart}}>{children}</Cart.Provider>
  )
}

export const CartState = () => {
    return useContext(Cart);
  };


export default ShopContext;