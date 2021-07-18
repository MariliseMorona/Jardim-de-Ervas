import React from 'react';

function Delivery(props) {
  return (
    <div id='about'>
      <div className='about-image'>
        <img src={props.image} alt='Imagem de uma bicicleta carregando flores em sua cesta.'/>
      </div>
      <div className="about-text">
        <h2>{props.title}</h2>
        <p>
          Nossas plantas são entregues com todos os cuidados para que cheguem a sua casa bonitas e saudáveis.
          Junto com cada compra você recebe um manual eletrônico com as dicas básicas de cuidado.
          Mas se ainda tiver dúvidas pode contar com a ajuda dos nossos especialistas.
        </p>
        <button>{props.button}</button>
      </div>
    </div>
  )
}

export default Delivery;