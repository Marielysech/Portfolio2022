import React from 'react'
import LeftFastAccess from '../LeftFastAccess'
import ProjectTile from './ProjectTile'
import { data } from './data'
import { ProjectGrid, ProjectsSection } from './ProjectElements'
import { SectionTitle } from '../GlobalElements'

const Projects = () => {
  return (
    <ProjectsSection>
      <SectionTitle>Hello</SectionTitle>
      <LeftFastAccess />
      <ProjectGrid>
        {data.sectionDetails.map((item, index) => <ProjectTile key={index} item={item} />)}
      </ProjectGrid>
    </ProjectsSection>
  )
}

export default Projects