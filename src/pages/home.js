import React from 'react';
import Navbar from '../components/navbar';
import Pefil from '../components/perfil';
import Resumo from '../components/resumo';
import Fita from '../components/fita';
import '../components/style.css';

// import { Container } from './styles';

function Home() {
  return (<>
    <Navbar></Navbar>
    <Pefil></Pefil>
    <Fita name="Resumo"></Fita>
    <Resumo></Resumo>
    <Fita name="Portifólio"></Fita>
  
  </>
  );
}

export default Home;