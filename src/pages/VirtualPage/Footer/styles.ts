import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const FooterContainer = styled.footer`
  background-color: #f9eae5;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.div`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-in-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(LinkS)`
  color: #5a3931;
  text-decoration: none;
  border: solid 0.1rem;
  padding: 0.45rem;
  border-radius: 50%;
  font-size: 24px;
  font-family: 'Playfair 400';
  margin-bottom: 16px;
  cursor: pointer;
`;

export const WebsiteRights = styled.small`
  color: #5a3931;
  margin-bottom: 8px;
  margin-right: 115px;

  @media screen and (max-width: 820px) {
    margin-right: 0;
    margin-bottom: 35px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 200px;

  p {
    color: #5a3931;
    margin-bottom: 10px;
    font-size: 17px;
    margin-right: 3rem;
    margin-left: 5px;
  }

  @media screen and (max-width: 820px) {
    flex-direction: column;
    p {
      color: #5a3931;
      margin: 0;
      margin-bottom: 35px;
      font-size: 17px;
    }
  }
`;

export const SocialIconLink = styled.a`
  color: #5a3931;
  font-size: 30px;
`;
