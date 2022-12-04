import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: "CS50x", text: 'Harvard University'},
  { number: "Fundamentals of Computing", text: 'Nanyang Technological University', },
  { number: "Java Foundations Associate", text: 'Oracle', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Certifications</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key = {index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
