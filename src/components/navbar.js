import React from 'react';
import{Nav ,NavItem , UlItem} from '../styles/style';
import {Link} from 'react-router-dom';
import "./style.css";
// import { Container } from './styles';

function Navbar() {
  return (
      <Nav> 
        <UlItem>
        <NavItem>
            <Link className="link" to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="perfil" className="link">Perfil</Link>
          </NavItem>
          <NavItem>
            <Link to="resumo" className='link'>Resumo</Link>
          </NavItem>
          <NavItem>
            <Link to="portifolio" className='link'>Portifólio</Link>
          </NavItem>
          <NavItem>
            <Link to="habilidade" className='link'>Habilidades</Link>
          </NavItem>
         
          
        </UlItem>
      </Nav>
  
  );
}

export default Navbar;