import React from 'react';

import Button from '../Button';
import {
  DropdownContainer,
  Icon,
  CloseIcon,
  DropdownWrapper,
  DropdownMenu,
  DropdownLink,
  BtnWrap,
  BtnLink,
} from './styles';

interface IDropdownProps {
  isOpen: boolean;
  toggle(): void;
}

const Dropdown: React.FC<IDropdownProps> = ({ isOpen, toggle }) => {
  return (
    <DropdownContainer isOpen={isOpen} toggle={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          <DropdownLink to="quemsomos" onClick={toggle}>
            Quem Somos
          </DropdownLink>
          <DropdownLink to="servicos" onClick={toggle}>
            Nossos Serviços
          </DropdownLink>
          <DropdownLink to="virtual" onClick={toggle}>
            Realidade Virtual
          </DropdownLink>
          <DropdownLink to="drieli" onClick={toggle}>
            Drieli Cruz
          </DropdownLink>
        </DropdownMenu>

        <BtnWrap>
          <Button isPrimary isBig>
            <BtnLink to="/contato">Entre em contato</BtnLink>
          </Button>
        </BtnWrap>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;
