import React from 'react'
import { SectionTitle } from '../GlobalElements'
import { StackSection, StackGrid, Subtitle, FrontEndInfos, BackEndInfos, Langages } from './StackElements'
import AutoRollingSlider from './AutoRollingSlider'
import {stackObject} from './stackData.js'

const Stack = () => {
  return (
    <StackSection id='stack'>
       <SectionTitle >My Stack</SectionTitle>
       <Subtitle>
         MERN STACK
       </Subtitle>
       <StackGrid>
          <FrontEndInfos>
            {stackObject.frontEnd?.map((item, index) => <Langages>{item}</Langages>)}
          </FrontEndInfos>
          <BackEndInfos >
            {stackObject.frontEnd?.map((item, index) => <Langages>{item}</Langages>)}
          </BackEndInfos>
        </StackGrid>
       <AutoRollingSlider />
      
  </StackSection>
    )
}

export default Stack