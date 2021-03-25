import ImageOne from '../../../../images/image1.jpg';
import ImageTwo from '../../../../images/image2.jpg';
import ImageThree from '../../../../images/image3.jpg';
import ImageFour from '../../../../images/image4.jpg';

interface IHeroData {
  path: string;
  label: string;
  image: string;
  alt: string;
}

const HeroData: IHeroData[] = [
  {
    path: '/projetos',
    label: 'Ver Projetos',
    image: ImageOne,
    alt: 'House',
  },
  {
    path: '/projetos',
    label: 'Ver Projetos',
    image: ImageTwo,
    alt: 'House',
  },
  {
    path: '/projetos',
    label: 'Ver Projetos',
    image: ImageThree,
    alt: 'House',
  },
  {
    path: '/projetos',
    label: 'Ver Projetos',
    image: ImageFour,
    alt: 'House',
  },
];

export default HeroData;
