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
          <DiCssdeck size = "4rem"/> <Span>Wai Hong</Span>
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
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href = "https://github.com/wahoong123" target = "_blank" rel = "noopener noreferrer">
        <AiFillGithub size = "4rem" />
      </SocialIcons>
      <SocialIcons href = "https://linkedin.com/in/wai-hong-choo-6b7728209" target = "_blank" rel = "noopener noreferrer">
        <AiFillLinkedin size = "4rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
