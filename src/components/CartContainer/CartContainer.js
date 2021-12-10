import React from 'react'
import { useGlobalContext } from '../../context'

import Items from '../../data'
import CartItem from '../CartItem/CartItem'

import "./cart.css"

const CartContainer =() => {
    const {cart, total,clearCart} = useGlobalContext();

  
    if(cart.length===0){
        return (
            <div className="cart">
                <header>
              <h2>YOUR BAG</h2>
             </header>
             <h4 className="empty-cart">is currntly empty</h4>
            </div>
        )
    }

   
    return (
        <div className="cart">
             
          <header>
              <h2>YOUR BAG</h2>
          </header>
           

           <div>      
               {cart.map((item) => {
                 return(
                     <CartItem key={item.id} {...item}  />
                 )
               })}
           </div>

           <div className="total-container">
           <hr />

           <div className="total-items">
             <h4>Total</h4>
            <h4>{total}</h4>
           </div>
              <button  onClick={clearCart} >CLEAR CART</button>
           </div>
           



      
        </div>
    )
}

export default CartContainer


