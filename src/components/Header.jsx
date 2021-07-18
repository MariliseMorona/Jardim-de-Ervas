/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Navbar from './Navbar';

function Header() {
  return (
    <div id="main">
      <Navbar />
      <div className="name">
        <h1>
          <span>Jardim funcional</span>
          <br/>VENHA APROVEITAR AS NOSSAS OFERTAS !!
        </h1>
        <p className="details">
          Cadastre-se para ter acesso aos melhores descontos da nossa BLACK FRIDAY.
        </p>
        <div className="contact-input">
        <input type="email" placeholder="Escreve seu melhor e-mail"/>
          <a href="#">Pegue seu Voucher</a>
      </div>
      </div>
    </div>
  );
}

export default Header;
