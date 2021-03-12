import React from 'react';
import Button from '../Button';

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

interface IVirtual {
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

const Virtual: React.FC<IVirtual> = ({
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
                  <ButtonLinkR to="/virtual">
                    <Button isBig isPrimary>
                      Realidade Virtual
                    </Button>
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

export default Virtual;
