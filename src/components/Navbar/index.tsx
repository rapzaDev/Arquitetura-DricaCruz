import React from 'react';
import Button from '../Button';
import { Nav, Logo, MenuBars, NavMenu, Linky, NavBtn } from './styles';

const Navbar: React.FC = () => (
  <>
    <Nav>
      <Logo to="/">DC</Logo>
      <MenuBars />
      <NavMenu>
        <Linky to="/quemsomos">Quem Somos</Linky>
        <Linky to="/servicos">NossosServicos</Linky>
        <Linky to="/arquitetura">Arquitetura</Linky>
        <Linky to="/interiores">Interiores</Linky>
        <Linky to="/consultoria">Consultoria</Linky>
        <Linky to="/regularizacao">Regularizacao</Linky>
      </NavMenu>

      <NavBtn>
        <Button isPrimary>Contato</Button>
      </NavBtn>
    </Nav>
  </>
);

export default Navbar;
