import React from 'react';

import Button from '../../../components/Button';
import {
  InterioresInfoContainer,
  Icon,
  CloseIcon,
  InterioresInfoWrapper,
  InterioresInfoMenu,
  InterioresInfoItems,
  TiposList,
  Tipo,
  BtnWrap,
  BtnLink,
} from './styles';

interface IInterioresInfoProps {
  openInterioresInfo: boolean;
  toggleInterioresInfo(): void;
  description: string;
  tipo1: string;
  tipo2: string;
  tipo3: string;
  tipo4: string;
  tipo5: string;
  tipo6: string;
  tipo7: string;
}

const InterioresInfo: React.FC<IInterioresInfoProps> = ({
  openInterioresInfo,
  toggleInterioresInfo,
  description,
  tipo1,
  tipo2,
  tipo3,
  tipo4,
  tipo5,
  tipo6,
  tipo7,
}) => {
  return (
    <InterioresInfoContainer
      openInterioresInfo={openInterioresInfo}
      toggleInterioresInfo={toggleInterioresInfo}
    >
      <Icon onClick={toggleInterioresInfo}>
        <CloseIcon />
      </Icon>
      <InterioresInfoWrapper>
        <InterioresInfoMenu>
          <InterioresInfoItems>
            <h4>Descrição:</h4>
            <p>{description}</p>

            <TiposList>
              <h4>Tipos:</h4>
              <Tipo>{tipo1}</Tipo>
              <Tipo>{tipo2}</Tipo>
              <Tipo>{tipo3}</Tipo>
              <Tipo>{tipo4}</Tipo>
              <Tipo>{tipo5}</Tipo>
              <Tipo>{tipo6}</Tipo>
              <Tipo>{tipo7}</Tipo>
            </TiposList>
          </InterioresInfoItems>
        </InterioresInfoMenu>

        <BtnWrap>
          <BtnLink
            href="https://docs.google.com/forms/d/e/1FAIpQLSfB1EivrF9xT8JfdB935NC-a8vTqxt056-2nSnHCXGTxghmuQ/viewform"
            target="_blank"
            onClick={toggleInterioresInfo}
          >
            <Button isPrimary isBig>
              Solicitar Orçamento
            </Button>
          </BtnLink>
        </BtnWrap>
      </InterioresInfoWrapper>
    </InterioresInfoContainer>
  );
};

export default InterioresInfo;
