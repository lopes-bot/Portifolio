import React from 'react';
import {Container , Card , BarProg , Tec} from '../styles/style';

// import { Container } from './styles';

function Know() {
  return (<Container>
      <Card>
        <Tec>HTML</Tec>
        <BarProg prog="100"></BarProg>

        <Tec>CSS</Tec>
        <BarProg prog="95"></BarProg>

        <Tec>Bootstrap</Tec>
        <BarProg prog="90"></BarProg>

        <Tec>PHP</Tec>
         <BarProg prog="40"></BarProg> 

        <Tec>JavaScript</Tec>
        <BarProg prog="80"></BarProg> 

        <Tec>Dart</Tec>
          <BarProg prog="60"></BarProg>

          <Tec>Flutter</Tec>
          <BarProg prog="60"></BarProg>

          <Tec>Figma</Tec>
          <BarProg prog="50"></BarProg>

      </Card>
      <Card>
      <Tec>Node.Js</Tec>
        <BarProg prog="85"></BarProg>
        <Tec>Vue.Js</Tec>
        <BarProg prog="50"></BarProg>

        <Tec>React.Js</Tec>
        <BarProg prog="85"></BarProg>

        <Tec>React Native</Tec>
          <BarProg prog="50"></BarProg>

        <Tec>MongoDB</Tec>
        <BarProg prog="60"></BarProg>

        <Tec>PostgreSQL</Tec>
        <BarProg prog="60"></BarProg>
        <Tec>MySQL</Tec>
        <BarProg prog="60"></BarProg>
        
        <Tec>Git</Tec>
        <BarProg prog="65"></BarProg>

        
      </Card>
      
      
  </Container>);
}

export default Know;