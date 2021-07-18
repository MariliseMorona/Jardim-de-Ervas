/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

function FeatureBox(props) {
  return (
    <div className='a-box'>
      <div className='a-b-img'>
        <img src={props.image}/>
      </div>
      <div className="s-b-text">
        <h2>{props.title}</h2>
        <p>Escolha a categoria de produtos que mais lhe agrada.</p>
      </div>
    </div>
  )
}

export default FeatureBox;
