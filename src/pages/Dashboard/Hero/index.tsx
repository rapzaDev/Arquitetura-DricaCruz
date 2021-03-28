import React, { useEffect, useState, useCallback } from 'react';

import Button from '../../../components/Button';

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

interface IHero {
  id: string;
}

interface IHeroData {
  path: string;
  label: string;
  image: string;
  alt: string;
}

const Hero: React.FC<IHero> = ({ id }) => {
  const [data, setData] = useState<IHeroData[]>([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setData(HeroData);
  }, []);

  const { length } = data;

  useEffect(() => {
    const nextSlide = () => {
      setCurrent(currentItem =>
        currentItem === length - 1 ? 0 : currentItem + 1,
      );
    };

    const timeoutNext = setTimeout(nextSlide, 3000);

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
    <Container id={id}>
      <HeroSection>
        <HeroWrapper>
          {data.map((slide, index) => {
            return (
              <HeroSlide key={index}>
                {index === current && (
                  <HeroSlider>
                    <HeroImage src={slide.image} alt={slide.alt} />
                    <HeroContent>
                      <LinkRouter
                        className="linkrouter"
                        href={slide.path}
                        target="_blank"
                      >
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
