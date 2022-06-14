import React, { useState } from 'react'
import {ProjectImg, LinkContainer, Website, Github, Title, Description, ProjectCard, TagsContainer, Tag, Button} from './ProjectTileElements'


const ProjectTile = ({item = [], toggleActive, blur}) => {

 

  return (
    <ProjectCard>
      <ProjectImg src={item.img} />
      <LinkContainer>
        <a href={item.website} target="_blank">
          <Website/>
        </a>
        <a href={item.github} target="_blank">
          <Github/>
        </a>
      </LinkContainer>
      <Title>Snoop</Title>
      <Description>{item.description}</Description>
        <TagsContainer>
          {item?.tags && item.tags.map((tag, index) => (<Tag onMouseEnter={(e) => toggleActive(e)} onMouseLeave={(e) => toggleActive(e)} key={index}>{tag}</Tag>))}
        </TagsContainer>
        {/* <Button>Read more</Button> */}
    </ProjectCard>
  )
}

export default ProjectTile