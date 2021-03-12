import React, { useCallback, useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
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
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = useCallback(() => {
    if (window.scrollY >= 600) setScrollNav(true);
    else setScrollNav(false);
  }, []);

  const toggleHome = useCallback(() => {
    scroll.scrollToTop();
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
        <NavMenuLinks to="quemsomos">Quem Somos</NavMenuLinks>
        <NavMenuLinks to="servicos">Nossos Serviços</NavMenuLinks>
        <NavMenuLinks to="virtual">Realidade Virtual</NavMenuLinks>
        <NavMenuLinks to="drieli">Drieli Cruz</NavMenuLinks>
      </NavMenu>

      <NavBtn>
        <BtnLink to="contato">
          <Button isPrimary>Contato</Button>
        </BtnLink>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
