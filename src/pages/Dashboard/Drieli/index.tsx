import React from 'react';

import Button from '../../../components/Button';
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

import logoDC from '../../../images/logoDrica.jpg';

interface ISectionData {
  id: string;
  name: string;
  description: string;
  text: string;
  btnlabel: string;
  image: string;
  reverse: boolean;
  delay: number;
}

const Drieli: React.FC<ISectionData> = ({
  id,
  reverse,
  description,
  name,
  text,
  btnlabel,
  image,
}) => {
  return (
    <Section id={id}>
      <Container>
        <ContainerBrown>
          <ContainerLeft>
            <ColumnLeft reverse={reverse}>
              <h1>
                {description} - {name}
              </h1>
              <p>{text}</p>
              <InfoLink
                href="https://www.canva.com/design/DAEUebFzNp0/LQNUKna690X0MK9AcpGuiQ/view"
                target="_blank"
              >
                <Button isBig>{btnlabel}</Button>
              </InfoLink>
            </ColumnLeft>

            <Logo src={logoDC} />
          </ContainerLeft>
        </ContainerBrown>
        <ColumnRigth className="direita" reverse={reverse}>
          <img src={image} alt="Drieli" />
        </ColumnRigth>
      </Container>
    </Section>
  );
};

export default Drieli;
