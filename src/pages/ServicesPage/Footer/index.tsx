import React, { useCallback } from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

import {
  FooterContainer,
  FooterWrap,
  // FooterLinksContainer,
  // FooterLinksWrapper,
  // FooterLinkItems,
  // FooterLinkTitle,
  // FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './styles';

interface IFooter {
  id: string;
  instagram: string;
  whatsapp: string;
  openArquiteturaInfo: boolean;
}

const Footer: React.FC<IFooter> = ({
  id,
  instagram,
  whatsapp,
  openArquiteturaInfo,
}) => {
  const toggleHome = useCallback(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <FooterContainer id={id}>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            {!openArquiteturaInfo ? (
              <SocialLogo
                to="hero"
                onClick={toggleHome}
                openArquiteturaInfo={openArquiteturaInfo}
              >
                DC
              </SocialLogo>
            ) : (
              <></>
            )}
            <WebsiteRights>
              Drieli Cruz Arquitetura © {new Date().getFullYear()} Todos os
              direitos reservados.{' '}
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href={instagram} target="_blank">
                <FaInstagram />
              </SocialIconLink>
              <p>@arquitetura.drielicruz</p>
              <SocialIconLink href={whatsapp} target="_blank">
                <FaWhatsapp />
              </SocialIconLink>
              <p>(79)99646-3173</p>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
