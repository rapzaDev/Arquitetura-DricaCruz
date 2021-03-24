import styled, { keyframes } from 'styled-components';
import ReactPlayer from 'react-player';

const appearFromZ = keyframes`
  from {
    opacity: 0;
    transform: translateZ(50px);
  }
  to {
    opacity: 1;
    transform: translateZ(0);
  }
`;

export const VirtualContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #5a3931;
`;

export const VirtualGroup = styled.div`
  display: flex;
  margin-top: -9rem;
  flex-direction: column;
  align-items: center;
`;

export const VirtualH1 = styled.h1`
  font-size: 2.5rem;
  color: #f9eae5;
  margin-bottom: 64px;
  font-family: 'Playfair 700';
  animation: ${appearFromZ} 2s;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    margin-top: 40px;
  }
`;

export const VirtualWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${appearFromZ} 2s;

  padding: 0.5rem;

  background: #f9eae5;

  @media screen and (max-width: 480px) {
    width: 440px;
  }

  @media screen and (width: 360px) {
    width: 360px;
  }

  @media screen and (width: 375px) {
    width: 380px;
  }

  @media screen and (width: 414px) {
    width: 410px;
  }
`;

export const VideoPlayer = styled(ReactPlayer)``;

export const VirtualCard = styled.div`
  background: #f9eae5;
  display: flex;
  width: 420px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 480px) {
    width: 100%;
  }

  &:hover {
    transform: scale(1.035);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
`;

export const VirtualIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const VirtualH2 = styled.h2`
  font-size: 1rem;
  color: #5a3931;
  margin-bottom: 10px;
`;

export const VirtualP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
