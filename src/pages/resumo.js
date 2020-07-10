import React from 'react';
import Navbar from '../components/navbar';
import Resumo from '../components/resumo';
import Fita from '../components/fita';

// import { Container } from './styles';

function ResumoPage() {
  return (<>
    <Navbar></Navbar>
    <Fita name="Resumo" top="90px"></Fita>
    <Resumo></Resumo>
  </>);
}

export default ResumoPage;