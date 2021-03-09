import React, { ButtonHTMLAttributes, useState } from 'react';
import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isBig?: boolean;
  isPrimary?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  const [isBig, setIsBig] = useState(false);
  const [isPrimary, setIsPrimary] = useState(false);

  return (
    <Container type="button" isBig={isBig} isPrimary={isPrimary} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
