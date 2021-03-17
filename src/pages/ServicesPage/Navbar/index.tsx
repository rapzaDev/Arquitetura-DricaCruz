import React, { useCallback, useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Button from '../../../components/Button';

import {
  Nav,
  NavLogo,
  MenuBars,
  NavMenu,
  // NavMenuLinks,
  NavBtn,
  BtnLink,
} from './styles';

interface INavProps {
  toggle(): void;
}

const Navbar: React.FC<INavProps> = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = useCallback(() => {
    if (window.scrollY >= 10) setScrollNav(true);
    else setScrollNav(false);
  }, []);

  const toggleContato = useCallback(() => {
    scroll.scrollToBottom();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, [changeNav]);

  return (
    <Nav scrollNav={scrollNav}>
      <NavLogo to="/">DC</NavLogo>
      <MenuBars onClick={toggle} />
      <NavMenu />

      <NavBtn>
        <BtnLink to="contato" onClick={toggleContato}>
          <Button isPrimary>Contato</Button>
        </BtnLink>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
