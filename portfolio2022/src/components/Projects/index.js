import React from 'react'
import LeftFastAccess from '../LeftFastAccess'
import ProjectTile from './ProjectTile'
import { data } from './data'
import { ProjectGrid, ProjectsSection } from './ProjectElements'
import { SectionTitle } from '../GlobalElements'

const Projects = ({toggleActive, blur}) => {
  return (
    <ProjectsSection>
      <SectionTitle id='projects'>My projects</SectionTitle>
      <ProjectGrid>
        {data.sectionDetails.map((item, index) => <ProjectTile toggleActive={toggleActive} blur={blur} key={index} item={item} />)}
      </ProjectGrid>
    </ProjectsSection>
  )
}

export default Projects