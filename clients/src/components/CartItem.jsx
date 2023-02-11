import React from 'react'

const CartItem = ({article}) => {
  return (
    <div>
      {article.map((cart)=>(
        <p>{cart.name}</p>
      ))}
    </div>
  )
}

export default CartItem;
