import styled from 'styled-components';

export const Container = styled.div`
    width:6rem;
    height:3rem;
    cursor: pointer;
    
    > div {
        height:1rem;
        background: var(--color-quaternary);
        border-radius: 2rem;
        
        &:nth-child(1){
            transform: rotate(-45deg);
        }
        &:nth-child(2){
            transform: rotate(45deg);
        }
    }
  
`;
