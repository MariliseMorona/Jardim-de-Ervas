import React from 'react';
import FeatureBox from './FeatureBox';
import featureimage from '../assets/img/feature_1_simple.png';
import featureimage1 from '../assets/img/feature_2_simple.png';
import featureimage2 from '../assets/img/feature_3_simple.png';

function Feature() {
  return (
    <div id='features'>
      <div className='a-container'>
      <FeatureBox image={featureimage} title='Ervas e Condimentos'/>
      <FeatureBox image={featureimage1} title='Flores' />
      <FeatureBox image={featureimage2} title='Frutas' />
    </div>
    </div>
  )
}
export default Feature;
