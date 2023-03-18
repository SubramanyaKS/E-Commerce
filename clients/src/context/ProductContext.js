import React, { createContext, useContext, useState } from 'react'

const Productc= createContext(null);

const ProductContext = ({children}) => {
    const [product,setProduct] = useState([]);
  return (
    <Productc.Provider value={{product,setProduct}}>{children}</Productc.Provider>
  )
  };

  export const ProductState = () => {
    return useContext(Productc);
  };

  export default ProductContext;