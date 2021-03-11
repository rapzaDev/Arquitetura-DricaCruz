import imgDC from '../../../images/imgDrica.jpg';

interface ISectionData {
  id: string;
  name: string;
  description: string;
  text: string;
  btnlabel: string;
  image: string;
  reverse: boolean;
  delay: number;
}

const SectionData: ISectionData = {
  id: 'drieli',
  name: 'Drieli Cruz',
  description: 'Arquiteta e Urbanista',
  text:
    'Física especializada em Arquitetura e Urbanismo com foco em interiores. Recém formada priorizando os diferenciais no mercado de trabalho.',
  btnlabel: 'Currículo',
  image: imgDC,
  reverse: false,
  delay: 100,
};

export default SectionData;
