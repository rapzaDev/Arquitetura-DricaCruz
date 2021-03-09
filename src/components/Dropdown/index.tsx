import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import {
  DropdownContainer,
  Icon,
  CloseIcon,
  DropdownWrapper,
  DropdownMenu,
  DropdownLink,
  BtnWrap,
} from './styles';

interface IMenudata {
  title: string;
  link: string;
}

interface IDropdownProps {
  isOpen: boolean;
  toggle(): void;
}

const Dropdown: React.FC<IDropdownProps> = ({ isOpen, toggle }) => {
  const menuData: IMenudata[] = [
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
    <DropdownContainer isOpen={isOpen} toggle={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {menuData.map((item, index) => (
            <DropdownLink to={item.link} key={index}>
              {item.title}
            </DropdownLink>
          ))}
        </DropdownMenu>

        <BtnWrap>
          <Button isPrimary isBig>
            <Link to="/contato">Entre em contato</Link>
          </Button>
        </BtnWrap>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;
