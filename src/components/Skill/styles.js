import styled from 'styled-components';

export const Container = styled.section`
    height: 90vh;
    padding-top: 5rem;
    @media (min-width: 1024px){
        padding-top:50px;
        height: 100%;
        margin-bottom:50px;
    }
    
    
`;
export const Row = styled.div `
    font-size: 1.5rem;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    > h1 , p {
        margin: 1rem;
        font-size: 2.5rem;
        color: var(--color-primary);
    }

    @media( min-width: 1024px){
        > h1 , p{
            font-size: 20px;
        }
        
        
    }
    

 `;

export const Button = styled.a `
    width:50vw;
    height:7rem;
    font-size:2.5rem;
    margin-top:2rem;
    margin-left:12rem;
    color:  var(--color-primary);
    cursor:pointer;
    &:hover{
        color: salmon;
        text-decoration: inherit;
    }
    @media (min-width: 1024px){
        font-size:18px;
        width:100px;
        height: 60px;
        margin-left:525px;
        
    }
`;

