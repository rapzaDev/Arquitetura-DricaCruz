import React, { useCallback, useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Button from '../../../components/Button';

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
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = useCallback(() => {
    if (window.scrollY > 0) setScrollNav(true);
    else setScrollNav(false);
  }, []);

  const toggleHome = useCallback(() => {
    scroll.scrollToTop();
  }, []);

  const toggleContato = useCallback(() => {
    scroll.scrollToBottom();
  }, []);

  const toggleQuemSomos = useCallback(() => {
    scroll.scrollTo(700);
  }, []);

  const toggleServicos = useCallback(() => {
    scroll.scrollTo(1550);
  }, []);

  const toggleVirtual = useCallback(() => {
    scroll.scrollTo(2450);
  }, []);

  const toggleDrieli = useCallback(() => {
    scroll.scrollTo(3390);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, [changeNav]);

  return (
    <Nav scrollNav={scrollNav}>
      <NavLogo to="hero" onClick={toggleHome}>
        DC
      </NavLogo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        <NavMenuLinks to="quemsomos" onClick={toggleQuemSomos}>
          Quem Somos
        </NavMenuLinks>
        <NavMenuLinks to="servicos" onClick={toggleServicos}>
          Nossos Serviços
        </NavMenuLinks>
        <NavMenuLinks to="virtual" onClick={toggleVirtual}>
          Realidade Virtual
        </NavMenuLinks>
        <NavMenuLinks to="drieli" onClick={toggleDrieli}>
          Drieli Cruz
        </NavMenuLinks>
      </NavMenu>

      <NavBtn>
        <BtnLink to="contato" onClick={toggleContato}>
          <Button isPrimary>Contato</Button>
        </BtnLink>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
