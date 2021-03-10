import React from 'react';
import Button from '../Button';
import {
  Nav,
  NavLogo,
  MenuBars,
  NavMenu,
  NavMenuLinks,
  NavBtn,
  BtnLink,
} from './styles';

interface INavProps {
  toggle(): void;
}

const Navbar: React.FC<INavProps> = ({ toggle }) => {
  return (
    <Nav>
      <NavLogo to="/">DC</NavLogo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        <NavMenuLinks to="quemsomos">Quem Somos</NavMenuLinks>
        <NavMenuLinks to="servicos">Nossos Serviços</NavMenuLinks>
        <NavMenuLinks to="arquitetura">Arquitetura</NavMenuLinks>
        <NavMenuLinks to="interiores">Interiores</NavMenuLinks>
        <NavMenuLinks to="consultoria">Consultoria</NavMenuLinks>
        <NavMenuLinks to="regularizacao">Regularização</NavMenuLinks>
        <NavMenuLinks to="virtual">Realidade Virtual</NavMenuLinks>
        <NavMenuLinks to="drieli">Drieli Cruz</NavMenuLinks>
      </NavMenu>

      <NavBtn>
        <BtnLink to="/contato">
          <Button isPrimary>Contato</Button>
        </BtnLink>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
