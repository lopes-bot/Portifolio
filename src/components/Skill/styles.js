import styled from 'styled-components';

export const Container = styled.section`
    height: 90vh;
    
    
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
