import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import {
  Container,
  ColumnLeft,
  ColumnRigth,
  Section,
  ContainerBlue,
  ContainerLeft,
} from './styles';

import Data from './data';

const InfoSection: React.FC = () => {
  const sectionData = Data;

  return (
    <Section>
      <Container>
        <ContainerBlue>
          <ContainerLeft>
            <ColumnLeft reverse={sectionData.reverse}>
              <h1>
                {sectionData.description} - {sectionData.name}
              </h1>
              <p>{sectionData.text}</p>
              <Link to="/curriculo">
                <Button isBig>{sectionData.btnlabel}</Button>
              </Link>
            </ColumnLeft>
          </ContainerLeft>
        </ContainerBlue>
        <ColumnRigth reverse={sectionData.reverse}>
          <img src={sectionData.image} alt="Drieli" />
        </ColumnRigth>
      </Container>
    </Section>
  );
};

export default InfoSection;
