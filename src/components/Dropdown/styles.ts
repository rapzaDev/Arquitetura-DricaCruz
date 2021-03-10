import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

interface IDropdownProps {
  isOpen: boolean;
  toggle(): void;
}

export const DropdownContainer = styled.div<IDropdownProps>`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #5a3931;
  display: grid;
  align-items: center;
  top: -100%;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: 0;

  ${props =>
    props.isOpen &&
    css`
      opacity: 1;
    `};

  ${props =>
    props.isOpen &&
    css`
      top: 0;
    `};
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  outline: none;

  cursor: pointer;
`;

export const CloseIcon = styled(FaTimes)`
  color: #f9eae5;
  cursor: pointer;
`;

export const DropdownWrapper = styled.div``;

export const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`;

export const DropdownLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5rem;
  list-style: none;
  transition: 0.2s ease-in-out;
  margin-top: 3rem;

  color: #f2f2f0;
  text-decoration: none;

  &:hover {
    opacity: 0.4;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 300px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f9eae5;
    border: 0;
  }

  a {
    color: #5a3931;
    text-decoration: none;
  }
`;
