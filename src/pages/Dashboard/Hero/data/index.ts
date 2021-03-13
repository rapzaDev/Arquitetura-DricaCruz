import ImageOne from '../../../../images/image1.jpg';
import ImageTwo from '../../../../images/image2.jpg';
import ImageThree from '../../../../images/image3.jpg';
import ImageFour from '../../../../images/image4.jpg';

interface IHeroData {
  title: string;
  path: string;
  label: string;
  image: string;
  alt: string;
}

const HeroData: IHeroData[] = [
  {
    title: 'Luxury Villa in Bali, Indonesia',
    path: '/projetos',
    label: 'Ver Projeto',
    image: ImageOne,
    alt: 'House',
  },
  {
    title: 'House in San Jose, Costa Rica',
    path: '/projetos',
    label: 'Ver Projeto',
    image: ImageTwo,
    alt: 'House',
  },
  {
    title: 'House in Calabasas, California',
    path: '/projetos',
    label: 'Ver Projeto',
    image: ImageThree,
    alt: 'House',
  },
  {
    title: 'House in Houston, Texas',
    path: '/projetos',
    label: 'Ver Projeto',
    image: ImageFour,
    alt: 'House',
  },
];

export default HeroData;
