import styled, { css, keyframes } from 'styled-components';

interface IDataProps {
  reverse: boolean;
}

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  animation: ${appearFromLeft} 1s;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
`;

export const ColumnLeft = styled.div<IDataProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: 1;

  ${props =>
    props.reverse &&
    css`
      order: 2;
    `}

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  p {
    margin-bottom: 2rem;
  }
`;

export const ColumnRigth = styled.div<IDataProps>`
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  order: 2;

  /* background: #000d1a; */

  ${props =>
    props.reverse &&
    css`
      order: 1;
    `}

  @media screen and (max-width: 768) {
    order: 1;

    ${props =>
      props.reverse &&
      css`
        order: 2;
      `}
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768) {
      width: 90%;
      height: 90%;
    }
  }
`;

export const ContainerLeft = styled.div`
  background: #fff;
  width: 100%;
  height: 40%;
`;

export const ContainerBlue = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  align-items: center;

  background: #000d1a;
`;
