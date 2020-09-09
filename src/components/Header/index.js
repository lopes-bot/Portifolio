import React, {useState} from 'react';
import {Nav ,Burger, NavLink } from './styles';
import logo from '../../assets/alogo.png';

const NavRigth = ({open}) =>{
    return(
    <NavLink open={open}>
        <li><a href="#profile" className="link">Perfil</a></li>
        <li><a href="#resumo" className="link">Resumo</a></li>
        <li><a href="#portifolio" className="link">Portifólio</a></li>
        <li><a href="#skill" className="link">Habilidade</a></li>
    </NavLink>
    );
}
const Header = () => {
   const [open, setOpen] = useState(false); 


    return (
       <Nav>
           <a alt="home" href="#home"><img alt="logo" src={logo}></img></a>     
           <Burger onClick={()=>{setOpen(!open)}} open={open}>
               <div />
               <div />
               <div />
           </Burger>
           <NavRigth open={open} />
       </Nav>
    );
}

export default Header;
