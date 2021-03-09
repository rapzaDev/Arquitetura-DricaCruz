import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import ImageOne from '../../images/image1.jpg';
import ImageTwo from '../../images/image2.jpg';
import ImageThree from '../../images/image3.jpg';
import ImageFour from '../../images/image4.jpg';
import Button from '../Button';

import {
  Container,
  HeroSection,
  HeroWrapper,
  HeroSlide,
  HeroSlider,
  HeroImage,
  HeroContent,
  Arrow,
  SliderButtons,
  PrevArrow,
  NextArrow,
} from './styles';

interface ISlides {
  title: string;
  price: string;
  path: string;
  label: string;
  image: string;
  alt: string;
}

const Hero: React.FC = () => {
  const data: ISlides[] = [
    {
      title: 'Luxury Villa in Bali, Indonesia',
      price: '$4,280,000',
      path: '/homes',
      label: 'View Home',
      image: ImageOne,
      alt: 'House',
    },
    {
      title: 'House in San Jose, Costa Rica',
      price: '$2,860,000',
      path: '/homes',
      label: 'View Home',
      image: ImageTwo,
      alt: 'House',
    },
    {
      title: 'House in Calabasas, California',
      price: '$8,420,000',
      path: '/homes',
      label: 'View Home',
      image: ImageThree,
      alt: 'House',
    },
    {
      title: 'House in Houston, Texas',
      price: '$6,660,000',
      path: '/homes',
      label: 'View Home',
      image: ImageFour,
      alt: 'House',
    },
  ];

  const [slides, setIslides] = useState<ISlides[]>([]);

  useEffect(() => {
    setIslides(data);
  }, [slides, data]);

  return (
    <Container>
      <HeroSection>
        <HeroWrapper>
          {slides.map((slide, index) => {
            return (
              <HeroSlide key={index}>
                <HeroSlider>
                  <HeroImage src={slide.image} alt={slide.alt} />
                  <HeroContent>
                    <h1>{slide.title}</h1>
                    <p>{slide.price}</p>
                    <Button isPrimary>
                      <Link to={slide.path}>
                        {slide.label}
                        <Arrow />
                      </Link>
                    </Button>
                  </HeroContent>
                </HeroSlider>
              </HeroSlide>
            );
          })}

          <SliderButtons>
            <PrevArrow />
            <NextArrow />
          </SliderButtons>
        </HeroWrapper>
      </HeroSection>
    </Container>
  );
};

export default Hero;
