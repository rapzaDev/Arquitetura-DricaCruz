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

  background: #5a3931;

  background-size: cover;
  background-position: center center;
  box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.6);
  transition: box-shadow 0.5s;
  will-change: transform;
  /* border: 15px solid white; */

  &::marker {
    animation: ${appearFromLeft} 1.5s;
  }

  /* animation: ${appearFromLeft} 1s; */

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
  background: #fff;
  /* margin-bottom: -10rem; */
  display: flex;
  justify-content: center;
`;

export const ColumnLeft = styled.div<IDataProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: flex-start; */
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
    color: #5a3931;
  }

  p {
    margin-bottom: 3rem;
    color: #5a3931;
  }

  a {
    text-decoration: none;
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
  display: flex;
  flex-direction: column;
  flex: 1;
  background: #f9eae5;
  width: 100%;
  height: 98%;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    /* margin-top: -5rem; */

    img {
      height: 700px;
      margin-bottom: -15rem;
    }
  }
`;

export const ContainerBrown = styled.div`
  display: flex;
  width: 100%;
  height: 99%;
  padding-top: 9px;

  align-items: center;
`;

export const Logo = styled.img`
  height: 600px;
  margin-bottom: -15rem;
`;
