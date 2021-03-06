import styled from 'styled-components';
import bntUrl from '../../assets/excluir.png';

export const Container = styled.section`
    width:100vw;
    height: 180rem;
    background: var(--color-secondary);
    margin-top: 26rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5rem;
    > button {
      width:50vw;
      height:7rem;
      background-color:#1E88E5;
      color: white;
      font-size:3rem;
      border-radius: 1rem;
      margin-top:2rem;
      margin-bottom:2rem;
      border: none;
      cursor:pointer;
      transition: 1s;

    }
    > button:hover{
      background: var(--color-border);
      border:none;
      
    }
    @media (min-width: 1024px){
      display:block;
      height:700px;
      width:100%;
      > button{
        font-size:16px;
        width:100px;
        height: 40px;
        border-radius:5px;
        margin-left:81%;
        margin-top: -300px;
      }
    }
    
    
`;
export const Foto = styled.div `
  width:49rem;
  height:49rem;
  background: var(--color-quaternary);
  border: solid var(--color-quaternary);
  border-width: 2rem;
  border-radius: 50rem;
  > img {
    width:45rem;
    height:45rem; 
    border-radius: 50rem;
  }
  @media(min-width: 1024px){
    
      border:none;
      height:210px;
      width:210px;
      display:block;
      margin-top:110px;
      border-radius:100px;
      border: solid white;
      border-width: 5px;

    > img{
      
      height:200px;
      width:200px;
      border-radius:100px;
    }
  }
`;
export const Info = styled.div `
    width:100vw;
    font-size:3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 8rem;
    padding-bottom: 2rem;
    padding-left:8rem;
    padding-right:8rem;
    color: var(--color-quaternary);
    background: var(--color-secondary);
    .bnt{
      width:8rem;
      height:8rem;
      margin-left:40rem;
      background-image: url(${bntUrl});
      background-repeat:no-repeat;
      background-size: cover;
      border:none;
      border-radius: 20rem;
      transition: 2s;
      cursor: pointer;

    }
    
    > h5{
        margin-top:1rem;
        padding-left: 2rem;
            
    }
    @media(min-width: 1024px){
      
      font-size: 20px;
      width:600px;
      display:block;
      height:200px;
      .bnt{
        margin-left:300px;
        width:25px;
        height:25px;
      }
      >h5 {
        padding-left:0;

      }
       
    }

`;
export const Row = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 1024px){
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    padding-left:80px;
    
    
    
  }
`;

export const Box = styled(Container) `
    margin-top: -2rem;
    @media (min-width: 1024px){
      
      font-size:16px;
      padding:0;
      display: flex;
      display:block;
      height:500px;
    }
`;