import React, {createContext, useState} from 'react'

export const ShopContext = createContext(null);

export const ShoppingCartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [productItems, setProductItems] = useState([]);
  
  return (
    <ShopContext.Provider value={{cartItems,setCartItems,productItems,setProductItems}}>
      {props.children}
    </ShopContext.Provider>
  )
}
