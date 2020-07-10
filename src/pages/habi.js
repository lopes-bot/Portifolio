import React from 'react';
import Navbar from '../components/navbar';
import Know from '../components/know';
import Fita from '../components/fita';

// import { Container } from './styles';

function Habi() {
  return (<>
    <Navbar></Navbar>
    <Fita name="Habilidades" top="90px"></Fita>
    <Know ></Know>
  </>);
}

export default Habi;