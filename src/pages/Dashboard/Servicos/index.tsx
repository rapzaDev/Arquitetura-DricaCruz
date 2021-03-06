import React from 'react';
import Button from '../../../components/Button';

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Subtitle,
  BtnWrap,
  ButtonLinkR,
  ImgWrap,
  Img,
} from './styles';

interface IServicos {
  id: string;
  lightBg: boolean;
  lightText: boolean;
  lightTextDesc: boolean;
  topLine: string;
  paragraph1: string;
  paragraph2: string;
  imgStart: boolean;
  img: string;
  alt: string;
  dark: boolean;
  primary: boolean;
  darkText: boolean;
}

const Servicos: React.FC<IServicos> = ({
  lightBg,
  id,
  imgStart,
  topLine,
  darkText,
  paragraph1,
  paragraph2,
  img,
  alt,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Subtitle darkText={darkText}>{paragraph1}</Subtitle>
                <Subtitle darkText={darkText}>{paragraph2}</Subtitle>

                <BtnWrap>
                  <ButtonLinkR to="/services">
                    <Button isBig>Serviços</Button>
                  </ButtonLinkR>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Servicos;
