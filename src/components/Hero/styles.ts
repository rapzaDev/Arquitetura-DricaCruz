import styled, { css } from 'styled-components';
import {
  IoMdArrowRoundForward,
  IoMdArrowBack,
  IoMdArrowForward,
} from 'react-icons/io';
import { shade } from 'polished';

export const Container = styled.div``;

export const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

export const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const HeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;

export const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
`;

export const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 100px);
  color: #fff;

  h1 {
    font-size: clamp(1rem, 8vw, 2rem);
  }

  a {
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    max-width: 160px;
  }
`;

export const Arrow = styled(IoMdArrowRoundForward)``;

export const ArrowButtons = css`
  width: 50px;
  height: 50px;
  color: #fff;
  background: #000d1a;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;

  &:hover {
    background: ${shade(0.3, '#cd853f')};
  }
`;

export const SliderButtons = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index: 10;
`;

export const PrevArrow = styled(IoMdArrowBack)`
  ${ArrowButtons}
`;

export const NextArrow = styled(IoMdArrowForward)`
  ${ArrowButtons}
`;
