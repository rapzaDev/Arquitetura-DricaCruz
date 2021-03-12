import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

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

interface IContato {
  id: string;
  instagram: string;
  whatsapp: string;
}

const Footer: React.FC<IContato> = ({ id, instagram, whatsapp }) => {
  return (
    <FooterContainer id={id}>
      <FooterWrap>
        {/* <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Midia Social</FooterLinkTitle>

              <FooterLink href={instagram}>Instagram</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer> */}
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="hero">DC</SocialLogo>
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
