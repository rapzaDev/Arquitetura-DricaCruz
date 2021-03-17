import React from 'react';

import Button from '../../../components/Button';
import {
  ConsultoriaInfoContainer,
  Icon,
  CloseIcon,
  ConsultoriaInfoWrapper,
  ConsultoriaInfoMenu,
  ConsultoriaInfoItems,
  Description,
  TiposList,
  Tipo,
  BtnWrap,
  BtnLink,
} from './styles';

interface IConsultoriaInfoProps {
  toggleConsultoriaInfo(): void;
  description: string;
  tipo1: string;
  tipo2: string;
  tipo3: string;
}

const ConsultoriaInfo: React.FC<IConsultoriaInfoProps> = ({
  toggleConsultoriaInfo,
  description,
  tipo1,
  tipo2,
  tipo3,
}) => {
  return (
    <ConsultoriaInfoContainer toggleConsultoriaInfo={toggleConsultoriaInfo}>
      <ConsultoriaInfoWrapper>
        <ConsultoriaInfoMenu>
          <ConsultoriaInfoItems>
            <Icon onClick={toggleConsultoriaInfo}>
              <CloseIcon />
            </Icon>
            <h4>Descrição:</h4>
            <Description>
              <p>{description}</p>
            </Description>

            <TiposList>
              <h4>Tipos:</h4>
              <Tipo>{tipo1}</Tipo>
              <Tipo>{tipo2}</Tipo>
              <Tipo>{tipo3}</Tipo>
            </TiposList>
          </ConsultoriaInfoItems>
        </ConsultoriaInfoMenu>

        <BtnWrap>
          <BtnLink
            href="https://docs.google.com/forms/d/e/1FAIpQLSfB1EivrF9xT8JfdB935NC-a8vTqxt056-2nSnHCXGTxghmuQ/viewform"
            target="_blank"
            onClick={toggleConsultoriaInfo}
          >
            <Button isPrimary isBig>
              Solicitar Orçamento
            </Button>
          </BtnLink>
        </BtnWrap>
      </ConsultoriaInfoWrapper>
    </ConsultoriaInfoContainer>
  );
};

export default ConsultoriaInfo;
