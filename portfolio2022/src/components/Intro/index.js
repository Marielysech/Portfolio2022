import React from 'react'
import { IntroSection, Container, FullScreenElemContainer, FullName, FullTitle, Links } from './IntroElements'
import Marquee from 'react-fast-marquee';

const Intro = () => {
  return (
    <IntroSection id='intro'>
    <Container>
      <Marquee  pauseOnHover direction='rigth' speed={60} gradient={false}>
        <FullName direction='row' >
        <em className='enhancedTitle'>Hey </em> <small>👋</small>, I'm Marie-Lyse Charriere .
        </FullName>
      </Marquee>
      <Marquee  pauseOnHover direction='left' speed={60} gradient={false}>
        <FullName>
          <em className='enhancedTitle'>Full Stack</em> Web Developer .
        </FullName>
      </Marquee>
      <Links>

      </Links>
    </Container>
    </IntroSection>
  )
}

export default Intro