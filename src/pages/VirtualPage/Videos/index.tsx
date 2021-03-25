import React from 'react';

import {
  VirtualContainer,
  VirtualGroup,
  VirtualH1,
  VirtualWrapper,
  VideoPlayer,
  // VideoTitle,
  // VirtualCard,
  // VirtualIcon,
  // VirtualH2,
} from './styles';

import video from '../../../videos/virtual1.mp4';

const Videos: React.FC = () => {
  return (
    <VirtualContainer>
      <VirtualGroup>
        <VirtualH1>Praça do Alomorfose</VirtualH1>
        <VirtualWrapper>
          {/* <VideoTitle>Praça do Alomorfose</VideoTitle> */}
          <VideoPlayer controls url={video} />
        </VirtualWrapper>
      </VirtualGroup>
    </VirtualContainer>
  );
};

export default Videos;
