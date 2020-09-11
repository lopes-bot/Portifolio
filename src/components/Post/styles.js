import styled from 'styled-components';
//import Andre from '../../assets/andre.png';
export const Container = styled.section`
    width: 100vw;
    height: 80vh;
    background: var(--color-tertiary);
    padding-top:15rem;
    
    > img {
        width:100%;
        animation: opac 7s cubic-bezier(1,-0.01,.93,.61);
        
        
    }
    @keyframes opac{
        100%{
            opacity: 1;
        }
        75%{
            opacity: 0.75;
        }
        50%{
            opacity: 0.5;
        }25%{
            opacity: 0.25;
        }
        0%{
            opacity: 0;
        }
    }
    @media (min-width: 1024px){
        display: flex;
        width:100%;
        
       > img {
            height:500px;
            width:500px;
            margin-left: 4rem;
       } 
            
     }
    }
    
`;
export const Text = styled.div `
    height:20rem;
    font-size:4rem;
    text-align:left;
    color: var(--color-secondary);
    margin:5%;
    
    @media (min-width: 1024px){
        height:10rem;
        width:40rem;
        margin-left:100px;
        font-size:2rem;
        
    }

`;
