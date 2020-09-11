import styled from 'styled-components';

export const Container = styled.footer`
    height:30rem;
    width:100%;
    background-image: linear-gradient(45deg, white, #003B5B);
    display:flex;
    align-items: center;
    justify-content: center;

    > a img{
        width: 6rem;
        height: 6rem;
        margin: 1rem;
    }
    @media (min-width: 1024px){
        height:300px;
        > a img{
        width: 20px;
        height: 20px;
        margin: 20px;
    }
    }
  
`;
