App.js


import React from 'react';
import Header from './components/Header';
import Feature from './components/Feature';
import Delivery from './components/Delivery';
import Services from './components/Services';
import Presentation from './components/Presentation';
import aboutimage from './assets/img/delivery.png';
import aboutimage1 from './assets/img/services.png';
import Contact from './components/Contact';
import Login from './components/Login';
import useToken from './components/UseToken';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
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
