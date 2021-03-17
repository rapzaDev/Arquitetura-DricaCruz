import styled, { keyframes } from 'styled-components';

import { FaTimes } from 'react-icons/fa';

interface IConsultoriaInfoProps {
  toggleConsultoriaInfo(): void;
}

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const ConsultoriaInfoContainer = styled.div<IConsultoriaInfoProps>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #5a3931;

  @media screen and (max-width: 768px) {
    height: 100%;
  }

  @media screen and (max-width: 480px) {
    height: 100%;
  }
`;

export const Icon = styled.div`
  position: relative;
  top: 0.1rem;
  right: -73rem;
  background: transparent;
  font-size: 2rem;
  outline: none;

  cursor: pointer;

  @media screen and (max-width: 768px) {
    top: -5rem;
    right: -43rem;
  }

  @media screen and (width: 1024px) {
    top: -1rem;
    right: -58rem;
  }

  @media screen and (max-width: 480px) {
    top: -5rem;
    right: -18rem;
  }

  @media screen and (width: 414px) {
    top: -5rem;
    right: -21rem;
  }

  @media screen and (width: 360px) {
    top: -7rem;
    right: -18rem;
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: #5a3931;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    margin-top: 2rem;
    color: #5a3931;
  }
`;

export const ConsultoriaInfoWrapper = styled.div`
  background: #f9eae5;
  display: flex;
  animation: ${appearFromLeft} 1s;

  @media screen and (max-width: 480px) {
    padding: 8rem 0;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 8rem 0;
  }
`;

export const ConsultoriaInfoMenu = styled.div`
  display: flex;

  @media screen and (max-width: 480px) {
    padding: 4rem 0;
  }

  @media screen and (max-width: 768px) {
    padding: 4rem 0;
  }
`;

export const ConsultoriaInfoItems = styled.div`
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

export const Description = styled.div``;

export const TiposList = styled.ul`
  max-width: 750px;
`;

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
  animation: ${appearFromLeft} 1.5s;

  button {
    position: sticky;
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
