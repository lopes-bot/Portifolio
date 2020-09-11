import styled from 'styled-components';
import bntUrl from '../../assets/excluir.png';
export const Container = styled.section`
    width: 100vw;
    height: 100vh;
    padding-top:4rem;
    @media (min-width: 1024px){
        width: 1351px;
    }
  
`;
export const Info = styled.div `
     font-size:3rem;
     color: var(--color-secondary);
     > h3{
         margin-bottom:3rem;
     }
     .bnt{
      width:8rem;
      height:8rem;
      margin-left:45rem;
      background-image: url(${bntUrl});
      background-repeat:no-repeat;
      background-size: cover;
      border:none;
      border-radius: 20rem;
      transition: 2s;
      cursor: pointer;

    }
    > a {
        text-decoration: none;
        font-size:4rem;
        color: #1E88E5;
    }
    > a:hover{
        color: var(--color-border);
    }
    @media (min-width: 1024px){
        font-size:20px; 
        width:500px;
        margin-left: 100px;
        .bnt{
            margin-left:450px;
            width:25px;
            height:25px;
       }
       > a {
        font-size:20px;
        margin-left:300px; 
       }
        
    }

`;
export const Row = styled.div `
    padding: 2rem;
    @media (min-width: 1024px){
       display:flex; 
       justify-content: center;
       margin: 0; 
       margin-top:100px; 
       padding:0;
       width:100%;
       
    }
`;

export const Button = styled.button `
      width:50vw;
      height:7rem;
      background-color:#1E88E5;
      color: white;
      font-size:3rem;
      border-radius: 1rem;
      margin-top:2rem;
      margin-bottom: 4rem;
      border: none;
      cursor:pointer;
      transition: 1s;
      margin-left: 12.5rem;
      &:hover{
      background: var(--color-border);
      border:none;
      }
        @media (min-width: 1024px){
            font-size:16px;
            width:100px;
            height: 40px;
            border-radius:5px;
            margin-left:400px;
        }
`;
