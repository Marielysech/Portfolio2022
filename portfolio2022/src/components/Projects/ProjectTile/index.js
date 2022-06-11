import React from 'react'
import {ProjectImg, LinkContainer, Website, Github, Title, Description, ProjectCard, TagsContainer, Tag, Button} from './ProjectTileElements'


const ProjectTile = ({item = []}) => {
  return (
    <ProjectCard>
      <ProjectImg src='https://images.unsplash.com/photo-1597633425046-08f5110420b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' />
      <LinkContainer>
        <a href={item.link} target="_blank">
          <Website/>
        </a>
        <a href={item.github} target="_blank">
          <Github/>
        </a>
      </LinkContainer>
      <Title>Snoop</Title>
      <Description>{item.description}</Description>
        <TagsContainer>
          {item?.tags && item.tags.map((tag, index) => (<Tag key={index}>{tag}</Tag>))}
          <Tag>MERN Stack</Tag>
          <Tag>MUI</Tag>

        </TagsContainer>
        <Button>Read more</Button>
    </ProjectCard>
  )
}

export default ProjectTile