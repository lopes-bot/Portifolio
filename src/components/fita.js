import React from 'react';
import {NavStyle,NavTitle } from '../styles/style';


// import { Container } from './styles';

function Fita(props) {
  return (<NavStyle top={props.top} >
      <NavTitle>{props.name}</NavTitle>
  </NavStyle>);
}

export default Fita;