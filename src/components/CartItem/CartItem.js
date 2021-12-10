import React from 'react'
import "./CartItem.css"
import {RiArrowDownSLine,RiArrowUpSLine} from 'react-icons/ri'
import { useGlobalContext } from '../../context';

const CartItem =({id,title,price,img,amount}) => {
    const {remove,increase,decrease} = useGlobalContext();
    return (
        <div className="cart-container">
            
            <div className="cart-items">
              <div className="cart_img">
                  <img src={img} alt={title} />
                  <div className="cart-details">
                  <h4 className="t">{title}</h4>
                  <h4 className="p">${price}</h4>
                  <button className="b" onClick={() => remove(id)}>remove</button>
                  </div>

              </div>

              <div className="icons-container">
                 <RiArrowUpSLine className="i" onClick={() =>increase(id)} />
                 <p>{amount}</p>
                 <RiArrowDownSLine className="i" onClick={() =>decrease(id)} />
              </div>
            </div>
        </div>
    )
}

export default CartItem



