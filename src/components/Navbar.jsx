import React, { useContext, useState } from 'react';
import logo from '../assets/img/logo.png';
import { CartContext } from './CartContext';
import {Link} from "react-router-dom";

const Navbar = ({cartToggle}) => {
const {shoppingCart} = useContext(CartContext);

const [nav, setnav] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setnav(true);
    } else {
      setnav(false);
    }
  }
  window.addEventListener('scroll', changeBackground);
  return (
    <nav className={nav ? 'nav active' : 'nav'}>
      <a href="#" className="logo">
        <img src={logo} alt="" />
      </a>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <a href="#" className="active">
            Início
          </a>
        </li>
        <li>
          <a href="#">Produtos</a>
        </li>
        <li>
          <a href="#">Serviços</a>
        </li>
        <li>
          <a href="#">Entrega</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
        <li onClick={cartToggle}><Link to="/cart"><span className="dollor"><i className="fas fa-cart-plus"></i></span><span className="shoppingCartTotal">{shoppingCart ? shoppingCart.length : 0}</span></Link>
        </li>
      </ul>
    </nav>
  );
}


export default Navbar;
