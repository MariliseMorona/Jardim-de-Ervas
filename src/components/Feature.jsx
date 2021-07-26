import React from 'react';
import FeatureBox from './FeatureBox';
import featureimage from '../assets/img/berrys.png';
import featureimage1 from '../assets/img/relax.png';
import featureimage2 from '../assets/img/citric.png';

function Feature() {
  return (
    <div id='features'>
      <div className='a-container'>
      <FeatureBox image={featureimage} title='Kit Berrys' price='300,00'/>
      <FeatureBox image={featureimage1} title='Kit Relax' price='150,00' />
      <FeatureBox image={featureimage2} title='Kit Citrus' price='450,00'/>
     </div>
   </div>
  )
}
export default Feature;
