import React from 'react'
import { SectionTitle } from '../GlobalElements'
import { StackSection, StackGrid, Subtitle, Infos, Langages } from './StackElements'
import AutoRollingSlider from './AutoRollingSlider'
import {stackObject} from './stackData.js'
import './Stack.css';


const Stack = () => {
  return (
    <StackSection id='stack'>
       <SectionTitle >My Stack</SectionTitle>
       <Subtitle>
          <em className='enhancedTitle'>MERN</em> Stack
       </Subtitle>
       <StackGrid>
          <Infos>
            <h3 className='stackTitle'>Frontend  technologies</h3>
            {stackObject.frontEnd?.map((item, index) => <Langages>{item}</Langages>)}
          </Infos>
          <Infos >
            <h3 className='stackTitle'>Backend technologies</h3>
            {stackObject.backEnd?.map((item, index) => <Langages >{item}</Langages>)}
          </Infos>
        </StackGrid>
       <AutoRollingSlider />
      
  </StackSection>
    )
}

export default Stack