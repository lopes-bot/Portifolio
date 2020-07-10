import React from 'react';
import Fita from '../components/fita';
import Pefil from '../components/perfil';
import Navbar from '../components/navbar';
// import { Container } from './styles';

function Perfil() {
  return (<>
  <Navbar></Navbar>
  <Fita name="Perfil" top="90px"></Fita>
  <Pefil></Pefil>
  </>);
}

export default Perfil;