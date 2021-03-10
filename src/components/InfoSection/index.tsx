import React from 'react';

import { Link } from 'react-router-dom';
import Button from '../Button';
import {
  Container,
  ColumnLeft,
  ColumnRigth,
  Section,
  ContainerBrown,
  ContainerLeft,
  Logo,
} from './styles';

import logoDC from '../../images/logo.jpg';

import Data from './data';

const InfoSection: React.FC = () => {
  const sectionData = Data;

  return (
    <Section>
      <Container>
        <ContainerBrown>
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

            <Logo src={logoDC} />
          </ContainerLeft>
        </ContainerBrown>
        <ColumnRigth reverse={sectionData.reverse}>
          <img src={sectionData.image} alt="Drieli" />
        </ColumnRigth>
      </Container>
    </Section>
  );
};

export default InfoSection;
