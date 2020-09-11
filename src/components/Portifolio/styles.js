import styled from 'styled-components';

export const Container = styled.section`
    height: 350rem;
    width:100%;
    background: var(--color-secondary);
    margin-top:40rem;
    display: flex;
    flex-direction: column;
   
  
`;

export const Card = styled.div `
    height:80vh;
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
        height:60rem;
    }
    &:hover{
        transition:1s;
        transform:scale(1.1);
    }

 `;