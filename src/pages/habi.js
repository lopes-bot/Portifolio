import React from 'react';
import Navbar from '../components/navbar';
import Know from '../components/know';
import Fita from '../components/fita';
import {Footer} from '../styles/style';
// import { Container } from './styles';

function Habi() {
  return (<>
    <Navbar></Navbar>
    <Fita name="Habilidades" top="100px"></Fita>
    <Know ></Know>
    <Footer></Footer>
  </>);
}

export default Habi;