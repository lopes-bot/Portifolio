import styled from 'styled-components';
import bntUrl from '../../assets/excluir.png';
export const Container = styled.section`
    width: 100vw;
    height: 100vh;
    
  
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

`;
export const Row = styled.div `
 padding: 2rem;

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
      margin-left: 12rem;
      &:hover{
      background: var(--color-border);
      border:none;
      }
`;
