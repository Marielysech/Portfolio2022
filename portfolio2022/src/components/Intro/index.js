import React, { useEffect, useRef, useState } from 'react'
import { IntroSection, Container, ScrollDown, FullName, CTAContainer, Links, Icon, MobileInto, CircleElements, Span  } from './IntroElements'
import Marquee from 'react-fast-marquee';
import { introData } from './Data';

const circleTextArr = introData.circleText.split("")
 
const Intro = () => {

  const movingCircle = useRef(null) 

  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    desitnationX: 0,
    desitnationY: 0,
    distanceX: 0,
    distanceY:0,
    key: -1,
  })  

  useEffect(() => {

    document.addEventListener("mousemove", (event) => {

      const { clientX, clientY } = event

      const mouseX = clientX
      const mouseY = clientY

      positionRef.current.mouseX = mouseX - movingCircle.current.clientWidth/2;
      positionRef.current.mouseY = mouseY - movingCircle.current.clientHeight/2;

      movingCircle.current.style.transform = `translate3d(${mouseX - movingCircle.current.clientWidth / 2 }px, ${mouseY - movingCircle.current.clientHeight }px, 0)`


    });

    return () => {};
  }, [])


  return (
    <IntroSection id='intro'>
    <Container>

      {/* Intro for mobile */}
      
      <MobileInto ref={movingCircle}> 
        <CircleElements >{circleTextArr.map((item, index) => <Span style={{ transform: `rotate(${(index)*10.1}deg)`}} key={index}>{item}</Span>)} 
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


    {/* Scroll down section */}

      <CTAContainer to="about" >
        
        <Links to='about'> <ScrollDown>Scroll Down</ScrollDown>
        <Icon /></Links>
        <Links to='about'> </Links>

      </CTAContainer>
     
    
    </IntroSection>
  )
}

export default Intro