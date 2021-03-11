import React from 'react';

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  Img,
} from './styles';

interface IServicos {
  id: string;
  lightBg: boolean;
  lightText: boolean;
  lightTextDesc: boolean;
  topLine: string;
  headLine: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
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
  lightText,
  headLine,
  darkText,
  paragraph1,
  paragraph2,
  paragraph3,
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
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{paragraph1}</Subtitle>
                <Subtitle darkText={darkText}>{paragraph2}</Subtitle>
                <Subtitle className="lastSubtitle" darkText={darkText}>
                  {paragraph3}
                </Subtitle>
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
