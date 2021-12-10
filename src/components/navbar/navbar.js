import React from 'react'
import "./navbar.css";
import {BsCartFill} from 'react-icons/bs'
import { useGlobalContext } from '../../context';



function Navbar() {
  const {amount} = useGlobalContext();
    return (
           <nav>
             <div className="nav-center">
                <h3>Cart</h3>
                 <div className="nav-container">
                     <div className="cart-icons">
                       <BsCartFill className="icon" />
                     </div>
                     <div className="amount">
                     <p>{amount}</p>
                     </div>
                     
                     
                 </div>
             </div>
           </nav>
    )
}

export default Navbar


