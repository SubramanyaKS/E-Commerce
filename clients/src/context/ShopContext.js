import React, { createContext, useContext, useState } from 'react'

const Cart = createContext();


const ShopContext = ({children}) => {
    const [cart,setCart]= useState({title:'',quantity:'',price:''});
    const [count, setCount] = useState(1);
    
  return (
    <Cart.Provider value={{cart,setCart,count,setCount}}>{children}</Cart.Provider>
  )
}

export const CartState = () => {
    return useContext(Cart);
  };


export default ShopContext;