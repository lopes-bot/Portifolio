import React from 'react';
import{ Mbox,MboxImg ,TextA,TextB, boxText} from '../styles/style';
import './style.css';
// import { Container } from './styles';

function Mark() {
  return (<Mbox>
    <boxText>
        <TextA>André Lopes de Lima<br></br><br></br>
      
      </TextA>
      <TextB>Full Stack Developer</TextB> 
    </boxText>
   
      <MboxImg>
        <img src="img/andre.png" alt="" className="boximg"></img>
      </MboxImg>
      
  </Mbox>);
}

export default Mark;