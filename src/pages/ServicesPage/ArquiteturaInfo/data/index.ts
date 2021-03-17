interface IArquiteturaInfo {
  description: string;
  etapas: string;
  tipo1: string;
  tipo2: string;
  tipo3: string;
  tipo4: string;
  tipo5: string;
}

const ArquiteturaInfoData: IArquiteturaInfo = {
  description:
    'O projeto arquitetônico é o esboço do projeto, essencial para qualquer edificação. Ele é definido como a materialização de uma ideia ou do espaço imaginado. Resumindo em um conjunto de representações gráficas e documentos elaborados com o objetivo de construir ou reformar uma obra.',
  etapas:
    'Levantamento cadastral, Estudo preliminar, Anteprojeto e projeto Executivo.',
  tipo1: 'Residencial',
  tipo2: 'Comercial',
  tipo3: 'Empresarial',
  tipo4: 'Corporativo',
  tipo5: 'Institucional',
};

export default ArquiteturaInfoData;
