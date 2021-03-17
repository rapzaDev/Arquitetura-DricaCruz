import styled, { css } from 'styled-components';

import { FaTimes } from 'react-icons/fa';

interface IArquiteturaInfoProps {
  openArquiteturaInfo: boolean;
  toggleArquiteturaInfo(): void;
}

export const ArquiteturaInfoContainer = styled.div<IArquiteturaInfoProps>`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #5a3931;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: -100%;

  padding-top: 5rem;

  transition: 0.3s ease-in-out;
  opacity: 0;

  @media screen and (max-width: 768px) {
    position: absolute;
    justify-content: center;
    height: 1400px;
  }

  @media screen and (max-width: 480px) {
    position: absolute;
    padding: 0.3rem;
    height: 1300px;
  }

  ${props =>
    props.openArquiteturaInfo &&
    css`
      opacity: 1;
    `};

  ${props =>
    props.openArquiteturaInfo &&
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

  @media screen and (max-width: 480px) {
    margin-top: 2rem;
    color: #5a3931;
  }
`;

export const ArquiteturaInfoWrapper = styled.div`
  background: #f9eae5;
  display: flex;

  @media screen and (max-width: 480px) {
    padding: 8rem 0;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 8rem 0;
  }
`;

export const ArquiteturaInfoMenu = styled.div`
  display: flex;

  @media screen and (max-width: 480px) {
    padding: 4rem 0;
  }

  @media screen and (max-width: 768px) {
    padding: 4rem 0;
  }
`;

export const ArquiteturaInfoItems = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  margin: 1.7rem 3rem;

  color: #5a3931;
  text-align: left;

  @media screen and (max-width: 768px) {
    margin: 0rem 1.5rem 4rem 1.5rem;
    position: relative;
    top: -80px;
  }

  @media screen and (max-width: 480px) {
    margin: 0rem 1.5rem 4rem 1.5rem;
    position: relative;
    top: -70px;
  }

  h4 {
    margin-bottom: 15px;
    font-family: 'Playfair 400';
  }

  p {
    text-align: left;
    max-width: 900px;
    margin-bottom: 40px;
    font-size: 18px;
    font-family: 'Playfair 400';
  }
`;

export const TiposList = styled.ul``;

export const Tipo = styled.li`
  font-size: 18px;
  margin-top: 1.2rem;
  margin-left: 1rem;
  font-family: 'Playfair 400';
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
    padding: 4rem 2rem 4rem;
    margin-left: 10px;

    background: #5a3931;
    border: solid 0.1rem #f9eae5;
    font-family: 'Playfair 400';

    @media screen and (max-width: 480px) {
      padding: 4rem 4rem 4rem;
      margin-left: 0;
    }

    @media screen and (max-width: 768px) {
      padding: 4rem 4rem 4rem;
      margin-left: 0;
    }
  }

  a {
    color: #f9eae5;
    text-decoration: none;
  }
`;

export const BtnLink = styled.a``;
