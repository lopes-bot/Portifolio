import React from 'react';
import {NavStyle,NavTitle } from '../styles/style';


// import { Container } from './styles';

function Fita(props) {
  return (<NavStyle>
      <NavTitle>{props.name}</NavTitle>
  </NavStyle>);
}

export default Fita;