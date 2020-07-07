import React from 'react';
import {Card, Title,Container , FormCard ,Text , Box , Name,
        Date,Phone, Email ,Linkicon,But} from '../styles/style';
import './style.css';        

// import { Container } from './styles';

function Perfil() {
  return (<Container>
  
    <Card>
        <Title>Sobre Mim</Title>
        <Text>
        Formado em Ciências e Tecnologia pela UFERSA (2018).
        Atualmente estou no 7° período de Engenharia de Computação pela  UFERSA.
        Gosto de trabalhar com Node js, React js e React Native por ser uma Stack que usa o javaScript no Back-end e no Front-end e Mobile. 
        Atualmente participo da startup SIMEP que está incubada no Nits UFERSA, trabalho no SIMEP como Desenvolvedor Full Stack desenvolvendo aplicações com React js, Node js e Postgresql. 
        Participação no Hackathon TCE 2019 e no Social Hacker 2020 e mais recentemente do Mega hack.
        </Text>
        
    </Card>
    <Card>
        <Title>Informações Pessoais</Title>
        <Box>
               <FormCard>Nome</FormCard>
            <Name>André Lopes de Lima</Name>

        </Box>
        <Box>
          <FormCard>Data de Nascimento</FormCard>
          <Date>29/03/1997</Date>

        </Box>
        <Box>
          <FormCard>Telefone</FormCard>
          <Phone>(88)99860-4361</Phone>
        </Box>
        <Box>
         <FormCard>Email</FormCard> 
         <Email>andrelopessfla@gmail.com</Email>
        </Box>
        <Title>Redes Sociais</Title>
        <div> 
          <Linkicon href="https://github.com/lopes-bot"><img src='img/github.png' alt="github" /></Linkicon>
          <Linkicon href="https://www.facebook.com/andre.lopesdelima.79/"><img src='img/facebook.png' alt="github" /></Linkicon>
          <Linkicon href="https://www.instagram.com/andrelopes5709/"><img src='img/instagram.png' alt="github" /></Linkicon>
          <Linkicon href="https://www.linkedin.com/in/andré-lopes-de-lima-b2119710b/"><img src='img/linkedin.png' alt="github" /></Linkicon>
          <Linkicon href="CV.pdf"><But>Curriculo</But></Linkicon>
        </div>
        
    </Card>
  
  </Container>);
}

export default Perfil;