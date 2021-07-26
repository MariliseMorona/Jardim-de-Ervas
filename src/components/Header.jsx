/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Navbar from './Navbar';
//import Login from './Login';

function Header() {
  return (
    <div id="main">
      <Navbar />
      <div className="name">
        <h1>
          <span>Jardim funcional</span>
          <br/>Divirta-se em nosso jardim virtual.
        </h1>
        <p className="details">
          Faça seu login e adquira os melhores produtos de nossa loja.
        </p>
        
          </div>
    </div>
  );
}

export default Header;
