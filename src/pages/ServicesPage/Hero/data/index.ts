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

export default HeroData;
