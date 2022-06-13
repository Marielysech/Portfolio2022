import React from 'react'
import { ContactSection, Bubble, ContentContainer, Text, Button, Image } from './ContactElements'
import { SectionTitle } from '../GlobalElements'
import image from '../../images/Contact.png'

export const Contact = () => {
  return (
    <ContactSection id='contact'>
      <SectionTitle >Contact</SectionTitle>
      <Image src={image} />
      {/* <ContentContainer>
        <Bubble/>
        <Text>Hey, are you available for a ☕   ?</Text>
      </ContentContainer> */}
      <Button href='https://www.linkedin.com/in/marie-lyse-charriere/' target="_blank">Contact me here</Button>
    </ContactSection>
  )
}
