import React from 'react';

 import { Container , Card ,Box} from './styles';
 
 import SigmedImg from '../../assets/sigmed.png'; 
 import MattesImg from '../../assets/mattes.png';
 import LicitaImg from '../../assets/licitaboard.png';
 import FisicaImg from '../../assets/fisica.png';
 import TitleSection from '../../UI/TitleSection';  
 import data from '../../data/Card';
function Portifolio() {
  return (<Container id='portifolio'>
      <TitleSection title="Portifolío" variant="lg" bar="10"/>
      <Box>
            <Card >
            <h2>{data[0].title}</h2>
            <img alt="Sigmed" src={SigmedImg}></img>
                <p>{data[0].description}</p>
        </Card>
        <Card >
            <h2>{data[1].title}</h2>
            <img alt="Experimetos" src={FisicaImg}></img>
            <p>{data[1].description}</p>
        </Card>
        <Card >
            <h2>{data[2].title}</h2>
            <img alt="Licitação" src={LicitaImg}></img>
            <p>{data[2].description}</p>
        </Card>
        <Card >
            <h2>{data[3].title}</h2>
            <img alt="Mattes" src={MattesImg}></img>
            <p>{data[3].description}</p>
        </Card> 
      </Box>
      
        
  </Container>);
}

export default Portifolio;