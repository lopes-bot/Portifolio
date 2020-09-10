import React from 'react';

import { Container } from './styles';

function TitleSection({title,variant, bar}) {
   
  return (<Container bg={variant} bar={`${bar+'rem'}`}>
      <h3>{title}</h3>
      <div />
  </Container>);
}

export default TitleSection;