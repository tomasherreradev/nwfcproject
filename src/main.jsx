import React from 'react'
import ReactDOM from 'react-dom/client'

import Header from './components/header';
import Nav from './components/nav';
import Hero from './components/hero';
import Servicios from './components/servicios';
import Formulario from './components/formulario';
import Footer from './components/templates/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.Fragment> 

      <Header nombre="Tomás Herrera"/>
      <Nav></Nav>

      <Hero titulo="Diseño y Desarrollo web Freelancer"></Hero>
      <main className="contenido">
          <Servicios></Servicios>
          <Formulario></Formulario>
      </main>

      <Footer nombre="Tomás Herrera"></Footer>

      

  </React.Fragment>
)

