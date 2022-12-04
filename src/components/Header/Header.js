import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "centre", color: 'white', marginBottom: '20;'}}>
          <DiCssdeck size = "3rem"/> <Span>Wai Hong</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href = "#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href = "#tech">
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href = "#about">
          <NavLink>About Me</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href = "https://github.com/wahoong123">
        <AiFillGithub size = "4rem" />
      </SocialIcons>
      <SocialIcons href = "linkedin.com/in/wai-hong-choo-6b7728209">
        <AiFillLinkedin size = "4rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
