import React from 'react';

import Button from '../../../components/Button';
import {
  DropdownContainer,
  Icon,
  CloseIcon,
  DropdownWrapper,
  // DropdownMenu,
  // DropdownLink,
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
        {/* <DropdownMenu>
          <DropdownLink to="arquitetura" onClick={toggle}>
            Arquitetura
          </DropdownLink>
          <DropdownLink to="interiores" onClick={toggle}>
            Interiores
          </DropdownLink>
          <DropdownLink to="consultoria" onClick={toggle}>
            Consultoria
          </DropdownLink>
          <DropdownLink to="regularizacao" onClick={toggle}>
            Regularização
          </DropdownLink>
        </DropdownMenu> */}

        <BtnWrap>
          <BtnLink to="contato" onClick={toggle}>
            <Button isPrimary isBig>
              Entre em contato
            </Button>
          </BtnLink>
        </BtnWrap>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;
