import React, { useEffect, useState, useCallback } from 'react';

import Button from '../Button';

import HeroData from './data';

import {
  Container,
  HeroSection,
  HeroWrapper,
  HeroSlide,
  HeroSlider,
  HeroImage,
  HeroContent,
  LinkRouter,
  Arrow,
  SliderButtons,
  PrevArrow,
  NextArrow,
} from './styles';

const Hero: React.FC = () => {
  const data = HeroData;

  const [current, setCurrent] = useState(0);

  const { length } = data;

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
          {data.map((slide, index) => {
            return (
              <HeroSlide key={index}>
                {index === current && (
                  <HeroSlider>
                    <HeroImage src={slide.image} alt={slide.alt} />
                    <HeroContent>
                      <h1>{slide.title}</h1>
                      <LinkRouter className="linkrouter" to={slide.path}>
                        <Button isPrimary>
                          {slide.label}
                          <Arrow />
                        </Button>
                      </LinkRouter>
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
