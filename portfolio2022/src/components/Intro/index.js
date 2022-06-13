import React from 'react'
import { IntroSection, Container, ScrollDown, FullName, CTAContainer, Links, Icon, MobileInto, CircleElements, Span, Test } from './IntroElements'
import Marquee from 'react-fast-marquee';
import { introData } from './Data';
import styled, { keyframes } from "styled-components"

const circleTextArr = introData.circleText.split("")
 
const Intro = ({ objectSize = 120, spacing = 12, offset = 30, overlap = false }) => {

  const d = objectSize + spacing * 2
  const r = objectSize / 2 + spacing / 2

  const CurvedText = styled.div`
    font-size: 20px;
    margin-bottom: ${overlap ? `-${r}px` : '0'};
    width: ${d + offset * 2}px;
    height: ${r + offset}px;
    path {
      fill: transparent;
    }
    text {
      fill: currentColor;
      text-anchor: middle;
    }
  `

  return (
    <IntroSection id='intro'>
    <Container>
      {/* Intro for mobile */}
      <MobileInto> 
        <CircleElements>{circleTextArr.map((item, index) => <Span style={{ transform: `rotate(${(index)*10.1}deg)`}} key={index}>{item}</Span>)} 
        </CircleElements>
      </MobileInto>
      {/* Intro for desktop */}
      <Marquee pauseOnHover direction='rigth' speed={60} gradient={false}>
        <FullName direction='row' >
        <em className='enhancedTitle'>Hey </em> <small>👋</small>, I'm Marie-Lyse  .
        </FullName>
      </Marquee>
      <Marquee  pauseOnHover direction='left' speed={60} gradient={false}>
        <FullName>
          <em className='enhancedTitle'>Full Stack</em> Web Developer .
        </FullName>
      </Marquee>
    </Container>
      <CTAContainer>
        
        <Links to='stack'> <ScrollDown>Scroll Down</ScrollDown>
        <Icon /></Links>
        <Links to='projects'> </Links>

      </CTAContainer>
     
    
    </IntroSection>
  )
}

export default Intro