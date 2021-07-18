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
          <br/>Quer saber como ter um jardim funcional?
        </h1>
        <p className="details">
          Vamos te dar dicas de como ter um jardim prático, bonito e funcional.
        </p>
        <a href="#" className="cv-btn">
          Download
        </a>
      </div>
    </div>
  );
}

export default Header;
