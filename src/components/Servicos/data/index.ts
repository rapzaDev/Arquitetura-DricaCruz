import servicosSvg from '../../../images/svg-2.svg';

interface IServicos {
  id: string;
  lightBg: boolean;
  lightText: boolean;
  lightTextDesc: boolean;
  topLine: string;
  paragraph1: string;
  paragraph2: string;
  imgStart: boolean;
  img: string;
  alt: string;
  dark: boolean;
  primary: boolean;
  darkText: boolean;
}

const Servicos: IServicos = {
  id: 'servicos',
  lightBg: true,
  lightText: false,
  lightTextDesc: true,
  topLine: 'Nossos Serviços',
  paragraph1:
    'Na Drieli Cruz Arquitetura buscamos realizar aquela tão sonhada casa reproduzindo uma arquitetura pautada no conforto, funcionalidade e estética.',
  paragraph2:
    'Então se sonha em construir, fazer reforma, regularizar ou deixar o seu cantinho com sua cara, clique no botão abaixo para saber mais sobre nossos serviços.',
  imgStart: true,
  img: servicosSvg,
  alt: 'Car',
  dark: true,
  primary: true,
  darkText: true,
};

export default Servicos;
