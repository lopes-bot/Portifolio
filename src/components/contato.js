import React from 'react';
import {Container,Card} from '../styles/style';

// import { Container } from './styles';

function Contato() {
  return (<Container>
      <Card>
        <form>
          <input type="text" placeholder="Nome"></input>
          <br></br>
          <input type="text" placeholder="Email"></input>
          <br></br>
          <input type="text" placeholder="Assunto"></input>
          <br></br>
          <textarea placeholder="Mensagem"></textarea>
          <br></br>
          <button>Enviar</button>
        </form>
      </Card>
      <Card></Card>
  </Container>);
}

export default Contato;