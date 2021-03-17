import React from 'react';

import Button from '../../../components/Button';
import {
  ArquiteturaInfoContainer,
  Icon,
  CloseIcon,
  ArquiteturaInfoWrapper,
  ArquiteturaInfoMenu,
  ArquiteturaInfoItems,
  TiposList,
  Tipo,
  BtnWrap,
  BtnLink,
} from './styles';

interface IArquiteturaInfoProps {
  toggleArquiteturaInfo(): void;
  description: string;
  etapas: string;
  tipo1: string;
  tipo2: string;
  tipo3: string;
  tipo4: string;
  tipo5: string;
}

const ArquiteturaInfo: React.FC<IArquiteturaInfoProps> = ({
  toggleArquiteturaInfo,
  description,
  etapas,
  tipo1,
  tipo2,
  tipo3,
  tipo4,
  tipo5,
}) => {
  return (
    <ArquiteturaInfoContainer toggleArquiteturaInfo={toggleArquiteturaInfo}>
      <ArquiteturaInfoWrapper>
        <ArquiteturaInfoMenu>
          <ArquiteturaInfoItems>
            <Icon onClick={toggleArquiteturaInfo}>
              <CloseIcon />
            </Icon>
            <h4>Descrição:</h4>
            <p>{description}</p>

            <h4>Etapas:</h4>
            <p>{etapas}</p>

            <TiposList>
              <h4>Tipos:</h4>
              <Tipo>{tipo1}</Tipo>
              <Tipo>{tipo2}</Tipo>
              <Tipo>{tipo3}</Tipo>
              <Tipo>{tipo4}</Tipo>
              <Tipo>{tipo5}</Tipo>
            </TiposList>
          </ArquiteturaInfoItems>
        </ArquiteturaInfoMenu>

        <BtnWrap>
          <BtnLink
            href="https://docs.google.com/forms/d/e/1FAIpQLSfB1EivrF9xT8JfdB935NC-a8vTqxt056-2nSnHCXGTxghmuQ/viewform"
            target="_blank"
            onClick={toggleArquiteturaInfo}
          >
            <Button isPrimary isBig>
              Solicitar Orçamento
            </Button>
          </BtnLink>
        </BtnWrap>
      </ArquiteturaInfoWrapper>
    </ArquiteturaInfoContainer>
  );
};

export default ArquiteturaInfo;
