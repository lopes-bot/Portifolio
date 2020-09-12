import styled from 'styled-components';

export const Nav = styled.nav `
    width:100vw;
    height:10.8rem;
    background: var(--color-primary);
    display:flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index:20;
    > a img {
      transform: scale(0.9,0.9);
    }
    @media (min-width:1024px){
      height:10vh;
      width:100%;
     
     
      > a img {
        margin-top:2%;
        transform: scale(0.4,0.4);
      }
     
    }
  
`;
export const Burger = styled.div `
  width:9.5rem;
  height:7rem;
  cursor: pointer;
  margin-right:1%;
  z-index:2;
  > div {
    background: #D5D5D5;
    width:5rem;
    height:0.6rem;
    margin: ${({open}) => open ? '5px' : '18px'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }

  }
  @media (min-width:1024px){
    display:none;
  }
 
`;

export const NavLink = styled.ul `
  position:absolute;
  background: var(--color-primary);
  width:100%;
  top:10rem;
  z-index:3;
  font-size: 3rem;
  transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100rem)'};
  transition: transform 0.5s ease-in-out;
  >li{
    margin-top:4rem;
    margin-bottom:4rem;
    list-style: none;
    &:hover .link{
        color: var(--color-secondary);
    }
  }
  > li a{
    text-decoration: none;
    margin:2rem;
    color:#D5D5D5;

  }
  @media (min-width: 1024px){
    transform:translateY(0);
    font-size: 16px;
    display: flex;
    list-style: none;
    position: relative;
    top:0;
    margin-left: 40%;
    transition: all 0.5s ease-out;
    >li {
      margin: 0;
      &:hover .link{
        color: var(--color-secondary);
      }
    }
  }

  
`;

