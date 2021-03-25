import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

import Bars from '../../../images/bars.svg';

interface INavProps {
  scrollNav: boolean;
}

export const Nav = styled.nav<INavProps>`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;

  transition: background 0.5s;

  background: ${props => (props.scrollNav ? '#5a3931' : 'transparent')};
`;

export const NavLogo = styled(LinkS)`
  color: #fff;
  text-decoration: none;
  border: solid 0.1rem;
  padding: 0.45rem;
  border-radius: 50%;
  font-size: 24px;
  font-family: 'Playfair 400';
  cursor: pointer;
`;

export const MenuBars = styled.i`
  display: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
    background-image: url(${Bars});
    background-size: contain;
    height: 40px;
    width: 40px;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -15px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMenuLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 3.5rem;
  height: 100%;
  text-decoration: none;
  cursor: pointer;

  &:active {
    border-bottom: 3px solid #fff;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  margin-left: 15px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const BtnLink = styled(LinkS)``;
