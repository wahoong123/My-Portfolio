import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main centre>
        Hello! <br />
        I am Wai Hong
      </SectionTitle>
      <SectionText>
        I am a Computer Science sophomore at Singapore Management University
        who's passionate about Mathematics and Artifical Intelligence.
      </SectionText>
    </LeftSection>

  </Section>
);

export default Hero;