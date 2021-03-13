import virtualSvg from '../../../../images/svg-3.svg';

interface IVirtual {
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

const Virtual: IVirtual = {
  id: 'virtual',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Realidade Virtual',
  paragraph1:
    'A realidade virtual na arquitetura é um recurso que permite a visualização de ambientes prontos, antes de os projetos saírem efetivamente do papel. É como se alguem fizesse uma visita aos cômodos de uma casa antes de a construção sequer começar.',
  paragraph2:
    'No nosso escritório os nossos serviços são apresentados na entrega final em realidade virtual, podendo ter essa sensação de estar no ambiente antes de ser construido.',
  imgStart: true,
  img: virtualSvg,
  alt: 'virtual',
  dark: false,
  primary: false,
  darkText: false,
};

export default Virtual;
