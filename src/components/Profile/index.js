import React,{useState}  from 'react';

import { Container , Foto , Info ,Row ,Box} from './styles';
import TitleSection from '../../UI/TitleSection';
import Andre from '../../assets/andre.png';
import data from '../../data/Profile';

function Profile() {
  let frase = data[1].description.substring(0,125);
  const [ visible , setVisible] = useState(true);
  const [texto , setTexto] = useState(frase);


  return (<Container id="profile">
        <TitleSection title="Perfil" variant="lg" bar="10"/>
        <Box>
              <Row >
                <Foto>
                    <img alt="André Lopes" src={Andre}></img>
                </Foto>
                <Info>
                    <h3>{data[0].title}</h3>
                    <h5>Nome: {data[0].name}</h5>
                    <h5>Email: {data[0].email}</h5>
                    <h5>Telefone: {data[0].telephone}</h5>
                    <h5>Data de Nascimento: {data[0].date}</h5>
                </Info> 
                 <Info>
                    <h3>{data[1].title}</h3>
                    {!visible && <button className="bnt" onClick={()=>{setVisible(true); setTexto(frase)}}></button>}
                    <h5>{texto}</h5>
                    
                  </Info>
            </Row>
            
           
            
            {visible &&  <button onClick={()=>{setVisible(false); setTexto(data[1].description)}}>Saiba Mais</button>}
        </Box>
        
  </Container>);
}

export default Profile;