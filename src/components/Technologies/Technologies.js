import React from 'react';
import { DiDatabase, DiFirebase, DiJava, DiReact, DiCode} from 'react-icons/di';
import { FiFigma } from "react-icons/fi";
import { SiSpring } from "react-icons/si";
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id = "tech">
    <SectionDivider />
    <br />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the computing field. Ranging from Backend to Frontend and UI/UX design.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size = "5rem" />
        <ListContainer>
          <ListTitle>React</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiJava size = "5rem" />
        <ListContainer>
          <ListTitle>Java</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCode size = "5rem" />
        <ListContainer>
          <ListTitle>C Language</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDatabase size = "5rem" />
        <ListContainer>
          <ListTitle>SQL Database</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiSpring size = "5rem" />
        <ListContainer>
          <ListTitle>Spring</ListTitle>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FiFigma size = "5rem" />
        <ListContainer>
          <ListTitle>Figma</ListTitle>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
