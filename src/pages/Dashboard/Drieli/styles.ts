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
    .direita {
      width: 0;
      margin-bottom: -1rem;
    }
  }
`;

export const Section = styled.section`
  background: #5a3931;
  border-top: solid 1rem #f9eae5;
  display: flex;
  justify-content: center;
  margin-top: -100px;
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
    font-family: 'PLayfair 700';
  }
  p {
    margin-bottom: 3rem;
    color: #5a3931;
    font-family: 'PLayfair 400';
  }
  a {
    text-decoration: none;
    font-family: 'PLayfair 400';
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
    padding: 0 5.5rem;
    /* width: 100%; */
  }
`;

export const InfoLink = styled.a``;

export const ColumnRigth = styled.div<IDataProps>`
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  order: 2;
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
    justify-content: center;

    img {
      /* height: 700px; */
      padding-bottom: 3rem;
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
  margin-top: 4rem;
`;
