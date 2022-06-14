import React from 'react'
import { AboutSection, Container, Text, ShortElem, TextShort, ShortSection, TitleShort, SubSectionContainer, Emoji, ShortSectionL} from './AboutElements'
import { SectionTitle } from '../GlobalElements'
import { data } from './Data'




const About = () => {
  return (
    <AboutSection id='about'>
    <SectionTitle >About Me</SectionTitle>
    <Container>
      <SubSectionContainer>
      {data.descrption.map((item, index) => 
        <ShortSectionL key={index}>
          <Emoji>{item.icon}</Emoji>
          <Text dangerouslySetInnerHTML={item.text()} ></Text>
        </ShortSectionL>)}
      </SubSectionContainer>

      <SubSectionContainer>
        <ShortSection>
            <TitleShort>{data.iceBreaker.title}</TitleShort>
            <TextShort dangerouslySetInnerHTML={data.iceBreaker.descr()}></TextShort>
          </ShortSection>
        <ShortSection>
          <TitleShort>{data.Languages.title}</TitleShort>
          <div>{data.Languages.descr.map((item,index) => <ShortElem key={index}>{item}</ShortElem>)}</div>
        </ShortSection>

        <ShortSection>
          <TitleShort>{data.availability.title}</TitleShort>
          <div>{data.availability.descr.map((item,index) => <ShortElem key={index}>{item}</ShortElem>)}</div>
        </ShortSection>

        

      </SubSectionContainer>
    </Container>
    
   
    </AboutSection>
  )
}

export default About