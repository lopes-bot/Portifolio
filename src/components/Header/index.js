import React, {useState} from 'react';
import {Nav ,Burger, NavLink } from './styles';
import logo from '../../assets/alogo.png';

const NavRigth = ({open}) =>{
    return(
    <NavLink open={open}>
        <li><a href="#profile">Perfil</a></li>
        <li><a href="#resumo">Resumo</a></li>
        <li><a href="#portifolio">Portifólio</a></li>
        <li><a href="#skill">Habilidade</a></li>
    </NavLink>
    );
}
const Header = () => {
   const [open, setOpen] = useState(false); 


    return (
       <Nav>
           <img alt="logo" src={logo}></img>
           <Burger onClick={()=>{setOpen(!open); console.log(open)}} open={open}>
               <div />
               <div />
               <div />
           </Burger>
           <NavRigth open={open} />
       </Nav>
    );
}

export default Header;
