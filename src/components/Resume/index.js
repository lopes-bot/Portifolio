import React ,{useState} from 'react';

import { Container , Info , Row , Button} from './styles';
import TitleSection from '../../UI/TitleSection';
import data from '../../data/Resume';
import CV from '../../assets/CV.pdf';

const InfoExtra = () =>{
    return(<>
        <p><strong>Bacharelado: </strong>{data[0].couser[1].bacharelado}</p>
        <p><strong>{data[0].couser[1].university} -</strong> {data[0].couser[1].location}</p>
        <p><strong>Status: </strong>{data[0].couser[1].status}</p>
        <br></br> 
    </>);
}
const InfoExtraJob = () =>{
    return(<>
           
            <p><strong>{data[1].job[1].company}: </strong>{data[1].job[1].location}</p>
            <p><strong>Descrição: </strong>{data[1].job[1].description}</p> 
    </>);
}



function Resume() {
   const [visible,setVisible] = useState(true); 
   const [visibleInfo, setVisibleInfo] = useState(true); 
  return (<Container id='resumo'>
    <TitleSection title="Resumo"  bar="14"/>
    <Row >
        <Info >
            <h3>{data[0].title}</h3>
            {!visible && <button className="bnt" onClick={()=>{setVisible(true); console.log(visible)}}></button>}
            <p> <strong>Bacharelado: </strong>{data[0].couser[0].bacharelado}</p>
            <p><strong>{data[0].couser[0].university} -</strong> {data[0].couser[0].location}</p>
            <p><strong>Status: </strong>{data[0].couser[0].status}</p>
            <br></br>
            {!visible && <InfoExtra />  }
            {visible && <Button id="bnt2" onClick={()=>{setVisible(false)}}>Saiba Mais</Button>}
            
        </Info>
        <Info >
            <h3>{data[1].title}</h3>
            {!visibleInfo && <button className="bnt" onClick={()=>{setVisibleInfo(true)}}></button>}
            <p><strong>Empresa: </strong>{data[1].job[0].company}</p>
            <p><strong>Endereço: </strong>{data[1].job[0].location}</p>
            <p><strong>Descrição: </strong>{data[1].job[0].description}</p>
            <br></br>
            {!visibleInfo && <InfoExtraJob />}
            
            {visibleInfo && <a href={CV}>Baixar Currículo</a>}            
            <br></br>
            <br></br>
            <br></br>
            {visibleInfo && <Button id="bnt1" onClick={()=>{setVisibleInfo(false)}}>Saiba Mais</Button>}
            {!visibleInfo && <a href={CV}>Baixar Currículo</a>}
        </Info>
        
    </Row>
  </Container>);
}

export default Resume;