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
  openedService: boolean;
  toggleService(): void;
  description: string;
  etapas: string;
  tipo1: string;
  tipo2: string;
  tipo3: string;
  tipo4: string;
  tipo5: string;
}

const ArquiteturaInfo: React.FC<IArquiteturaInfoProps> = ({
  openedService,
  toggleService,
  description,
  etapas,
  tipo1,
  tipo2,
  tipo3,
  tipo4,
  tipo5,
}) => {
  return (
    <ArquiteturaInfoContainer
      openedService={openedService}
      toggleService={toggleService}
    >
      <Icon onClick={toggleService}>
        <CloseIcon />
      </Icon>
      <ArquiteturaInfoWrapper>
        <ArquiteturaInfoMenu>
          <ArquiteturaInfoItems>
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
          <BtnLink href="contato" onClick={toggleService}>
            <Button isPrimary isBig>
              Entre em contato
            </Button>
          </BtnLink>
        </BtnWrap>
      </ArquiteturaInfoWrapper>
    </ArquiteturaInfoContainer>
  );
};

export default ArquiteturaInfo;
