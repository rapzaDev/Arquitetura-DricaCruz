import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface IButtonProps {
  isBig: boolean;
  isPrimary: boolean;
}

export const Container = styled.button<IButtonProps>`
  background: transparent;
  height: 46px;
  padding: 14px 24px;
  width: 100%;
  align-items: center;
  justify-content: center;

  font-size: 14px;
  border: 0.2rem;
  transition: background-color 0.2s;

  ${props =>
    props.isPrimary &&
    css`
      border: solid 0.1rem;
      color: #fff;
    `}

  ${props =>
    props.isBig &&
    css`
      display: flex;
      /* border: solid 0.1rem; */
      font-size: 20px;
      justify-content: center;
      color: #f9eae5;

      background: #5a3931;
      text-decoration: none;
    `}

  &:hover {
    background: ${shade(0.4, '#5a3931')};
  }
`;
