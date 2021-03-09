import React, { useEffect, useState, useRef, useCallback } from 'react';
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
  path: string;
  label: string;
  image: string;
  alt: string;
}

const Hero: React.FC = () => {
  const data: ISlides[] = [
    {
      title: 'Luxury Villa in Bali, Indonesia',
      path: '/homes',
      label: 'View Home',
      image: ImageOne,
      alt: 'House',
    },
    {
      title: 'House in San Jose, Costa Rica',
      path: '/homes',
      label: 'View Home',
      image: ImageTwo,
      alt: 'House',
    },
    {
      title: 'House in Calabasas, California',
      path: '/homes',
      label: 'View Home',
      image: ImageThree,
      alt: 'House',
    },
    {
      title: 'House in Houston, Texas',
      path: '/homes',
      label: 'View Home',
      image: ImageFour,
      alt: 'House',
    },
  ];

  const [current, setCurrent] = useState(0);

  const [slides, setIslides] = useState<ISlides[]>([]);

  const { length } = slides;
  const timeout = useRef(null);

  useEffect(() => {
    setIslides(data);
  }, []);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent(currentItem =>
        currentItem === length - 1 ? 0 : currentItem + 1,
      );
    };

    const timeoutNext = setTimeout(nextSlide, 4200);

    return () => {
      if (timeoutNext) {
        clearTimeout(timeoutNext);
      }
    };
  }, [current, length]);

  const nextSlide = useCallback(() => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }, [current, length]);

  const prevSlide = useCallback(() => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }, [current, length]);

  return (
    <Container>
      <HeroSection>
        <HeroWrapper>
          {slides.map((slide, index) => {
            return (
              <HeroSlide key={index}>
                {index === current && (
                  <HeroSlider>
                    <HeroImage src={slide.image} alt={slide.alt} />
                    <HeroContent>
                      <h1>{slide.title}</h1>
                      {/* <p>{slide.price}</p> */}
                      <Button isPrimary>
                        <Link to={slide.path}>
                          {slide.label}
                          <Arrow />
                        </Link>
                      </Button>
                    </HeroContent>
                  </HeroSlider>
                )}
              </HeroSlide>
            );
          })}

          <SliderButtons>
            <PrevArrow onClick={prevSlide} />
            <NextArrow onClick={nextSlide} />
          </SliderButtons>
        </HeroWrapper>
      </HeroSection>
    </Container>
  );
};

export default Hero;
