import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import { Container, ColumnLeft, ColumnRigth, Section } from './styles';

interface ISectionData {
  name: string;
  description: string;
  text: string;
}

const InfoSection: React.FC = () => {
  const sectionData: ISectionData = {
    name: 'Drieli Cruz Arquitetura',
    description: 'Arquiteta e Urbanista',
    text:
      'Física especializada em Arquitetura e Urbanismo com foco em interiores. Recém formada priorizando os diferenciais no mercado de trabalho',
  };

  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h1>heading</h1>
          <p>paragraph</p>
          <Button isPrimary>
            <Link to="/homes">label</Link>
          </Button>
        </ColumnLeft>
        <ColumnRigth>
          <img src="" alt="home" />
        </ColumnRigth>
      </Container>
    </Section>
  );
};

export default InfoSection;
