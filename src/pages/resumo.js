import React from 'react';
import Navbar from '../components/navbar';
import Resumo from '../components/resumo';
import Fita from '../components/fita';
import {Footer} from '../styles/style';

// import { Container } from './styles';

function ResumoPage() {
  return (<>
    <Navbar></Navbar>
    <Fita name="Resumo" top="100px"></Fita>
    <Resumo></Resumo>
    <Footer></Footer>
  </>);
}

export default ResumoPage;