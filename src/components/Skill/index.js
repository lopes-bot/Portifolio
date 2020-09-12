import React, {useState , useEffect} from 'react';
import axios from 'axios';
import TitleSection from '../../UI/TitleSection';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

import { Container , Row} from './styles';
const api = 'https://api.github.com/users/lopes-bot/repos'

function  Skill() {
    const [data, setData] = useState([]);
   
    useEffect(()=>{
      async function getUser(){
         
          try{
                 const response = await axios.get(api);
                        let array = response.data;
                        let tam = array.length 
                        let lenguage = ['HTML','TypeScript','JavaScript','Dart','Java','C'];
                        let quantity =[0,0,0,0,0,0]; 
                        let DATA = [];      
                        for(let j =0; j<6; j++){
                           
                            for(let i = 0; i< tam ; i++){
                              if(lenguage[j] === array[i].language){
                                  
                                 let pivoty = quantity[j];
                                     pivoty = pivoty + 1;
                                     quantity[j] = pivoty; 
                                  
                              }

                            }
                        }
                        for( let i =0 ; i< 6 ; i++){
                          let ob = {name:lenguage[i], Projetos: quantity[i]}
                          DATA.push(ob);
                        }  
                        setData(DATA); 
                         
                       
                        
             }catch(error){
                        console.log(error);
              }
           }
                    
                getUser();
                
                
    },[]);


  console.log(data);
   
  return (<Container id="skill">
    <TitleSection title="Skills"  bar="10"/>
      
    <Row>
         <h1>Dados Fornecidos pela Api do Github</h1>
        <BarChart width={950} height={400} data={data}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="name"/>
          <YAxis type="number" domain={[0, dataMax => (dataMax * 1)]}  />
          <Tooltip/>
          <Legend />
          <Bar dataKey="Projetos" fill="#06608A" background={{ fill: '#eee' }} />
          
          </BarChart> 
          <p>Projetos e suas respectivas tecnologias </p>
      
         
    </Row>
    
  </Container>);
}

export default Skill;