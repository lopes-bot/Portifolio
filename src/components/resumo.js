import React from 'react';
import {Container , Card ,Title , Text } from '../styles/style';
       
// import { Container } from './styles';

function Resumo() {
  return (
  <Container >
      
        <Card>
            <Title>Formação Acadêmica</Title>
         
            <Text>  
                   <b>Bacharelado: Ciência e Tecnologia</b>  <br></br><br></br>
                   <b>Universidade Federal Rural do Semi-Árido</b>  – ​Bairro São Geraldo – Pau dosFerros/RN <br></br><br></br>
                   <b>Bacharelado: Engenharia de Computação</b><br></br><br></br>
                   <b>Universidade Federal Rural do Semi-Árido</b>  – ​Bairro São Geraldo – Pau dosFerros/RN<br></br><br></br>
                    Atualmente Cursando o 7° período.
            </Text>

        </Card>
        <Card>
            <Title>Experiência Profissional</Title>
            <Text>
            <b>SIMEPS</b> - Pau dos Ferros, Rio Grande do Norte
            Responsável por desenvolver as interfaces com o React js  e pela regra de negócios dos sistemas web feito com Node js.<br></br><br></br>
            <b>Freelance</b> - Home office desenvolvendo Api REST com Node.js, Express, MongoDB e PostgreSQL. 
            Responsável pela criação de Algumas Aplicação Front-end com React.js, Vue.js.
             Desenvolvedor de APP Mobile com React Native, Flutter.
            </Text>
        </Card>
        
  </Container>);
}

export default Resumo;