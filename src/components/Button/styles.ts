import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface IButtonProps {
  isBig: boolean;
  isPrimary: boolean;
}

export const Container = styled.button<IButtonProps>`
  background: #cd853f;
  height: 46px;
  padding: 14px 24px;
  width: 100%;
  align-items: center;
  justify-content: center;

  font-size: 14px;
  border: 0;
  transition: background-color 0.2s;

  ${props =>
    props.isPrimary &&
    css`
      background: #000d1a;
      color: #fff;
    `}

  ${props =>
    props.isBig &&
    css`
      padding: 16px 40px;
      font-size: 20px;
    `}

  &:hover {
    background: ${shade(0.3, '#cd853f')};
  }
`;
