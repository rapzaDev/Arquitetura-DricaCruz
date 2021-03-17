import React from 'react';

import Button from '../../../components/Button';
import {
  RegularizacaoInfoContainer,
  Icon,
  CloseIcon,
  RegularizacaoInfoWrapper,
  RegularizacaoInfoMenu,
  RegularizacaoInfoItems,
  Description,
  BtnWrap,
  BtnLink,
} from './styles';

interface IRegularizacaoInfoProps {
  toggleRegularizacaoInfo(): void;
  description: string;
}

const RegularizacaoInfo: React.FC<IRegularizacaoInfoProps> = ({
  toggleRegularizacaoInfo,
  description,
}) => {
  return (
    <RegularizacaoInfoContainer
      toggleRegularizacaoInfo={toggleRegularizacaoInfo}
    >
      <RegularizacaoInfoWrapper>
        <RegularizacaoInfoMenu>
          <RegularizacaoInfoItems>
            <Icon onClick={toggleRegularizacaoInfo}>
              <CloseIcon />
            </Icon>
            <Description>
              <h4>Descrição:</h4>
              <p>{description}</p>
            </Description>
          </RegularizacaoInfoItems>
        </RegularizacaoInfoMenu>

        <BtnWrap>
          <BtnLink
            href="https://docs.google.com/forms/d/e/1FAIpQLSfB1EivrF9xT8JfdB935NC-a8vTqxt056-2nSnHCXGTxghmuQ/viewform"
            target="_blank"
            onClick={toggleRegularizacaoInfo}
          >
            <Button isPrimary isBig>
              Solicitar Orçamento
            </Button>
          </BtnLink>
        </BtnWrap>
      </RegularizacaoInfoWrapper>
    </RegularizacaoInfoContainer>
  );
};

export default RegularizacaoInfo;
