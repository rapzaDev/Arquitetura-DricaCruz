import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import { Nav, Logo, MenuBars, NavMenu, NavMenuLinks, NavBtn } from './styles';

interface INavitem {
  title: string;
  link: string;
}

interface INavProps {
  toggle(): void;
}

const Navbar: React.FC<INavProps> = ({ toggle }) => {
  const navData: INavitem[] = [
    {
      title: 'Quem Somos',
      link: '/quemsomos',
    },
    {
      title: 'Nossos Serviços',
      link: '/servicos',
    },
    {
      title: 'Arquitetura',
      link: '/arquitetura',
    },
    {
      title: 'Interiores',
      link: '/interiores',
    },
    {
      title: 'Consultoria',
      link: '/consultoria',
    },
    {
      title: 'Regularização',
      link: '/regularizacao',
    },
  ];

  return (
    <Nav>
      <Logo to="/">DC</Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {navData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>

      <NavBtn>
        <Link to="/contato">
          <Button isPrimary>Contato</Button>
        </Link>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
