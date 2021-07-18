import React from 'react';
import Header from './components/Header';
import Feature from './components/Feature';
import Delivery from './components/Delivery';
import Services from './components/Services';
import Presentation from './components/Presentation';
import aboutimage from './assets/img/delivery.png';
import aboutimage1 from './assets/img/services.png';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Feature />
      <Delivery image={aboutimage} title="Entrega" button="Acompanhe sua encomenda" />
      <Presentation />
      <Services image={aboutimage1} title="Serviços" button="Baixe nosso guia" />
      <Contact />
    </div>
  );
}

export default App;
