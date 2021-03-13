import dricaSvg from '../../../../images/svg-1.svg';

interface IQuemSomos {
  id: string;
  lightBg: boolean;
  lightText: boolean;
  lightTextDesc: boolean;
  topLine: string;
  headLine: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  imgStart: boolean;
  img: string;
  alt: string;
  dark: boolean;
  primary: boolean;
  darkText: boolean;
}

const QuemSomos: IQuemSomos = {
  id: 'quemsomos',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Quem Somos',
  headLine: 'Drieli Cruz Arquitetura',
  paragraph1:
    'Inspirado nas emoções que surgem ao admirar uma bela arquitetura, nasceu a Drieli Cruz Arquitetura com a proposta de reverberar o que as construções nos transmitem de melhor',
  paragraph2:
    'Com criatividade e amor pela profissão, nos lançamos no mercado desenvolvendo um trabalho singular e inovador, respeitando a personalidade e necessidades dos nossos clientes.',
  paragraph3:
    'Contrando nosso serviços, você estará ajudando a repercutir esse movimento de boas sensações através da construção e deixando o seu sonho sob os nossos cuidados, do princípio ao fim.',
  imgStart: false,
  img: dricaSvg,
  alt: 'Car',
  dark: true,
  primary: true,
  darkText: false,
};

export default QuemSomos;
