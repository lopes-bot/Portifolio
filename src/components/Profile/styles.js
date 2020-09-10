import styled from 'styled-components';

export const Container = styled.section`
    width:100vw;
    height: 145rem;
    background: var(--color-secondary);
    margin-top: 26rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    > button {
      width:50vw;
      height:7rem;
      background-color:#1E88E5;
      color: white;
      font-size:3rem;
      border-radius: 1rem;
      margin-top:2rem;
      border: none;
      cursor:pointer;
    }
    > button:hover{
      background: var(--color-border);
      border:none;
      
    }
    @media (min-width: 1024px){
       width:100%;
       height: 1200px;
       flex-wrap: wrap;
    }
    
    
`;
export const Foto = styled.div `
  width:80vw;
  height:50vh;
  background: var(--color-quaternary);
  border: solid var(--color-quaternary);
  border-width: 2rem;
  border-radius: 50rem;
  > img {
    width:74vw;
    height:45.8vh; 
    border-radius: 50rem;
  }
  @media(min-width: 1024px){
    height:200px ;
    width:200px;
    > img{
      height:200px ;
      width:200px;
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
      background:var(--color-secondary);
      border:none;
    }
    > h5{
        margin-top:1rem;
            
    }
    @media(min-width: 1024px){
      font-size: 18px;
      padding-left: 0px;
      width:95%;
      > h5{
        width:100%;
        
      }
      
    }

`;
export const Row = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
`;