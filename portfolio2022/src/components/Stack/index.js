import React from 'react'
import { Item, SectionTitle } from '../GlobalElements'
import { StackSection, StackGrid, Subtitle, FrontEndInfos, BackEndInfos, Langages } from './StackElements'
import AutoRollingSlider from './AutoRollingSlider'
import {stackObject} from './stackData.js'
import './Stack.css';


const Stack = () => {
  return (
    <StackSection id='stack'>
       <SectionTitle >My Stack</SectionTitle>
       <Subtitle>
          <em>MERN</em> Stack
       </Subtitle>
       <StackGrid>
          <FrontEndInfos>
            <h3 className='stackTitle'>Frontend  technologies</h3>
            {stackObject.frontEnd?.map((item, index) => <Langages>{item}</Langages>)}
          </FrontEndInfos>
          <BackEndInfos >
            <h3 className='stackTitle'>Backend technologies</h3>
            {stackObject.backEnd?.map((item, index) => <Langages >{item}</Langages>)}
          </BackEndInfos>
        </StackGrid>
       <AutoRollingSlider />
      
  </StackSection>
    )
}

export default Stack