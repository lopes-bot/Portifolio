import styled from 'styled-components';

export const Container = styled.div`
  width:100vw;
  height:10vh;
  font-size:3rem;
  color: var(${({bg}) => bg ? '--color-quaternary': '--color-secondary'}) ;
  padding: 2rem;
  > div {
      background:var(${({bg}) => bg ? '--color-quaternary': '--color-secondary'});
        width:${({bar})=> bar };
      height:1rem;
      border-radius: 15px;
  }
  @media(min-width:1024px){
    font-size:24px;
    width:1351px;
    > div{
      height:10px;
    }
  }
`;

