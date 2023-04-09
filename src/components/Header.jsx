import React from 'react';
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {useSelector} from "react-redux";

const Header = () => {
  const {cartItems} = useSelector((state)=> state.cart);
  return (
    <div id="header">
        <div id="navbar">
            <div id="logo"><Link to="/">Ecommerce</Link></div>
            <nav>
                <ul>
                    <li><a href="/products">Product</a></li>
                    <li><Link to="/cart">
                       <span id="Carticon"><AiOutlineShoppingCart size={28}/>
                         <p>{cartItems.length}</p>
                       </span>
                      </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Header