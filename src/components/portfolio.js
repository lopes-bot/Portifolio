import React from 'react';
import { BoxConatiner , Container , TitleImg,TextImg } from '../styles/style';
import './style.css';
// import { Container } from './styles';
      

function Portifolio() {

  return(<>
  <Container >
      <BoxConatiner>
          <TitleImg>SigMed</TitleImg>
          <img className="img" src="img/sigmed.png" alt=""></img>
          <TextImg>Sistema de Gerenciamento de consultórios médico Front-end criando em React.js
             e Back-end criado usando Node.js, express e ProstgreSQL. </TextImg>
        
    </BoxConatiner>
    <BoxConatiner>
          <TitleImg>Experimentos de Física</TitleImg>
          <img className="img" src="img/fisica.png" alt=""></img>
          <TextImg>Site criado com HTML, CSS e Bootstrap,
             feito para divulgar Conteúdo e Experimentos de Física. </TextImg>
        
    </BoxConatiner>
  </Container>
  <Container >
      <BoxConatiner>
          <TitleImg>Licitaboard</TitleImg>
          <img className="img" src="img/licitaboard.png" alt=""></img>
          <TextImg>Sistema para monitora as licitações feitas pelo governo, dados disponibilizado pelo API do TCE
             Front-end feito em Vue.js e Back-end feito com Node.js e MongoDB.</TextImg>
        
    </BoxConatiner>
    <BoxConatiner>
          <TitleImg>DevFy</TitleImg>
          <img className="img" src="img/devfy.png" alt=""></img>
          <TextImg>Sistema feito para gerenciar tarefas no dia a dia dos desenvolvedores. Front-end feito com React.js</TextImg>
        
    </BoxConatiner>
  </Container>
  <Container >
      <BoxConatiner>
          <TitleImg>Mão na Massa</TitleImg>
          <img className="img" src="img/MNM.png" alt=""></img>
          <TextImg>Sistema para juntar trabalhadores informais a trabalhos em sua região.
            Front-end feito com React.js Back-end criado com Node.js, express e MongoDB.</TextImg>
        
    </BoxConatiner>
    <BoxConatiner>
          <TitleImg>Mattes</TitleImg>
          <img className="img" src="img/mattes.png" alt=""></img>
          <TextImg>Sistema para juntar pessoas a imoveis ou quartos compartilhados. 
            Front-end criado em React.js Beck-end feito com Node.js, express e PostgreSQL. </TextImg>
        
    </BoxConatiner>
  </Container>
  <Container >
      <BoxConatiner>
          <TitleImg>Quiz</TitleImg>
          <img className="imgmobile" src="img/quiz.png" alt=""></img>
          <TextImg>APP quiz sobre os Estados Unidos. APP Mobile criado com Dart e Flutter</TextImg>
        
    </BoxConatiner>
    <BoxConatiner>
          <TitleImg>Gorjeta APP</TitleImg>
          <img className="imgmobile" src="img/conv.png" alt=""></img>
          <TextImg>APP conversor Para calcular Gorjetas. APP Mobile criado com Dart e Flutter </TextImg>
        
    </BoxConatiner>
  </Container>
  
  
  
  </>
  );
}

export default Portifolio;