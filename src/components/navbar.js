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
            <Link className="link">Perfil</Link>
          </NavItem>
          <NavItem>
            <Link className='link'>Resumo</Link>
          </NavItem>
          <NavItem>
            <Link className='link'>Portifólio</Link>
          </NavItem>
          <NavItem>
            <Link className='link'>Contato</Link>
          </NavItem>
        </UlItem>
      </Nav>
  
  );
}

export default Navbar;