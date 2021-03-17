import React from 'react';
// import Button from '../Button';

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
} from './styles';

interface IServicos {
  id: string;
  Icon1: string;
  Icon2: string;
  Icon3: string;
  Icon4: string;
  toggleArquiteturaInfo(): void;
  toggleInterioresInfo(): void;
}

const Servicos: React.FC<IServicos> = ({
  id,
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  toggleArquiteturaInfo,
  toggleInterioresInfo,
}) => {
  return (
    <ServicesContainer id={id}>
      <ServicesH1>Nossos Serviços</ServicesH1>
      <ServicesWrapper>
        <ServicesCard onClick={toggleArquiteturaInfo}>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Arquitetura</ServicesH2>
        </ServicesCard>
        <ServicesCard onClick={toggleInterioresInfo}>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Interiores</ServicesH2>
        </ServicesCard>
        <ServicesCard onClick={toggleArquiteturaInfo}>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Consultoria</ServicesH2>
        </ServicesCard>
        <ServicesCard onClick={toggleArquiteturaInfo}>
          <ServicesIcon src={Icon4} />
          <ServicesH2>Regularização</ServicesH2>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Servicos;
