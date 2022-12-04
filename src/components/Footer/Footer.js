import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Contact Me</LinkTitle>
          <LinkItem href = "mailto:whchoo.2021@scis.smu.edu.sg">whchoo.2021@scis.smu.edu.sg</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <SocialContainer>
          <SocialIcons href = "https://github.com">
            <AiFillGithub size = "3rem" />
          </SocialIcons>
          <SocialIcons href = "https://linkedin.com">
            <AiFillLinkedin size = "3rem" />
          </SocialIcons>
          <SocialIcons href = "https://instagram.com">
            <AiFillInstagram size = "3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;