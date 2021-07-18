/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import logo from '../assets/img/logo.png';

function Navbar() {
  const [nav, setnav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setnav(true);
    } else {
      setnav(false);
    }
  };
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
      </ul>
    </nav>
  );
}

export default Navbar;
