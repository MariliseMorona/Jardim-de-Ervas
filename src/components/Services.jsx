import React from 'react';

function Services(props) {
  return (
    <div id='about'>
      <div className='about-image'>
        <img src={props.image} alt='Imagem de duas pessoas cultivando plantas na terra e acessórios de jardinagem.' />
      </div>
      <div className='about-text'>
        <h2>{props.title}</h2>
        <p>
          Precisa de ajuda para planejar, implantar ou cuidar do seu jardim? Conte com a gente.
          Nossos especialistas estão disponíveis para lhe atender. Baixe nosso guia: "O que você precisa saber para ter
          um jardim funcional"
        </p>
        <button>{props.button}</button>
      </div>
    </div>
  )
}

export default Services;