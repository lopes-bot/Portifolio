import React from 'react';
import Typist from 'react-typist';
import { Container , Text } from './styles';
import Gif from '../../assets/Developer.gif';
function Post() {
  
  return (<Container id="home"> 
          
          <Typist>
              <Text>
                 <h2>André Lopes de Lima </h2> 
                <p>Full Stack Developer</p>
              </Text>              
          </Typist>
          <img alt="gif" src={Gif}></img>               
  </Container>);
}

export default Post;