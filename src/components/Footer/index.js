import React from 'react';

import { Container } from './styles';
import faceImg from '../../assets/facebook.png';
import gitImg from '../../assets/github.png';
import linkImg from '../../assets/linkedin.png';
import instImg from '../../assets/instagram.png';

function Footer() {
  return (<Container>
      <a href="https://www.facebook.com/andre.lopesdelima.79/"><img alt="Facebook" src={faceImg}></img></a>
      <a href="https://github.com/lopes-bot"><img alt="Github" src={gitImg}></img></a>
      <a href="https://www.linkedin.com/in/andré-lopes-de-lima-b2119710b/"><img alt="Linkedin" src={linkImg}></img></a>
      <a href="https://www.instagram.com/andrelopes5709/"><img alt="Instagram" src={instImg}></img></a>
  </Container>);
}

export default Footer;