import styled from 'styled-components';

export const Container = styled.section`
    height: 300rem;
    width:100%;
    background: var(--color-secondary);
    margin-top:40rem;
    display: flex;
    
    flex-direction: column;

    @media (min-width: 1024px){
        flex-direction: row;
        height:800px;
        margin-top:0;
       
    }
   
  
`;

export const Card = styled.div `
    height:70vh;
    width:90vw;
    margin-left:3rem;
    margin-top:4rem;
    background: var(--color-quaternary);
    font-size:2rem;
    text-align:center;
    color: var(--color-primary);
    padding:2%;
    border-radius: 2rem;
    > img {
        width:84vw;
        height:50rem;
    }
    &:hover{
        transition:1s;
        transform:scale(1.1);
    }
    @media (min-width: 1024px){
        
        width:400px;
        height:300px;
        font-size: 16px;
        margin-left:5px;
        border-radius:10px;
        margin-top:0; 
        margin: 10px;
        > img {
            width:200px;
            height:150px;
        }
        &:hover{
        transition:1s;
        transform:scale(1.6);
        cursor: zoom-in;
    }
    }

 `;

 export const Box = styled.div `
    @media (min-width: 1024px){
        padding-top:100px;
        padding-bottom:100px;
        width:1300px;
        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-left:80px;
    }
 
 `;