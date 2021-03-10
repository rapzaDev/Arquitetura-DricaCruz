import React from 'react';

import Button from '../Button';
import {
  Container,
  ColumnLeft,
  InfoLink,
  ColumnRigth,
  Section,
  ContainerBrown,
  ContainerLeft,
  Logo,
} from './styles';

// import logoDC from '../../images/logo.jpg';
import logoDC from '../../images/logoDrica.jpg';

import Data from './data';

const Drieli: React.FC = () => {
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
              <InfoLink to="/curriculo">
                <Button isBig>{sectionData.btnlabel}</Button>
              </InfoLink>
            </ColumnLeft>

            <Logo src={logoDC} />
          </ContainerLeft>
        </ContainerBrown>
        <ColumnRigth className="direita" reverse={sectionData.reverse}>
          <img src={sectionData.image} alt="Drieli" />
        </ColumnRigth>
      </Container>
    </Section>
  );
};

export default Drieli;
