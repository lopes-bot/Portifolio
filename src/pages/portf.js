import React from 'react';
import Navbar from '../components/navbar';
import Fita from '../components/fita';
import Portifolio from '../components/portfolio';

// import { Container } from './styles';

function Portf() {
  return (<>
  <Navbar></Navbar>
  <Fita name="Portifólio" top="90px"></Fita>
    <Portifolio ></Portifolio>
  </>);
}

export default Portf;