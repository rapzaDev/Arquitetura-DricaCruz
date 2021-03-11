import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

interface IContainerInfoProps {
  lightBg: boolean;
  id: string;
}

interface IRowInfoProps {
  imgStart: boolean;
}

interface IHeadingProps {
  lightText: boolean;
}

interface ISubtitleProps {
  darkText: boolean;
}

export const InfoContainer = styled.div<IContainerInfoProps>`
  color: #fff;
  background: ${props => (props.lightBg ? '#f9eae5' : '#5a3931')};

  @media screen and (max-width: 768px) {
    padding: 170px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div<IRowInfoProps>`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${props =>
    props.imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${props =>
      props.imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0px;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #5a3931;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1<IHeadingProps>`
  margin-bottom: 24px;
  font-size: 48px;
  font-family: 'PLayfair 700';
  line-height: 1.1;
  font-weight: 600;
  color: ${props => (props.lightText ? '#f9eae5' : '#5a3931')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p<ISubtitleProps>`
  max-width: 440px;
  margin-bottom: 1.5rem;
  font-size: 18px;
  font-family: 'PLayfair 400';
  line-height: 24px;
  color: ${props => (props.darkText ? '#5a3931' : '#f9eae5')};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;

  button {
    margin-top: 25px;
  }
`;

export const ButtonLinkR = styled(LinkR)`
  /* display: flex; */
  text-decoration: none;
  font-family: 'PLayfair 400';
  color: #f9eae5;

  button {
    padding: 0 12rem;
  }

  @media screen and (max-width: 480px) {
    button {
      padding: 0 8rem;
    }
  }
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  max-width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
