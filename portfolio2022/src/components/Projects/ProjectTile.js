import React from 'react'
import styled from 'styled-components'
import {AiFillGithub} from 'react-icons/ai'
import {FiExternalLink} from 'react-icons/fi'


const ProjectCard = styled.div`
  border: 2px solid white;
  width: fit-content;

`
const Title = styled.h3``
const TagsContainer = styled.div``
const Tag = styled.p``
const Description = styled.p``
const LinkContainer = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0.5rem;
`

const Website = styled(FiExternalLink)`
  color: black;
  cursor: pointer;
  font-size: 25px;

  &:hover {
    color:white;
    font-size: 27px;
    transition: 0.3s ease-in-out
  }

`

const Github = styled(AiFillGithub)`
  color: black;
  cursor: pointer;
  font-size: 25px;
  
  &:hover {
    color:white;
    font-size: 27px;
    transition: 0.3s ease-in-out
  }
`



const ProjectTile = ({item = []}) => {
  return (
    <ProjectCard>
      <Title>Snoop</Title>
      <Description>Social Media App</Description>
      <TagsContainer>
        {item?.tags && item.tags.map((tag, index) => (<Tag key={index}>{tag}</Tag>))}
      </TagsContainer>
      <LinkContainer>
        <a href={item.link} target="_blank">
          <Website/>
        </a>
        <a href={item.github} target="_blank">
          <Github/>
        </a>
      </LinkContainer>
    </ProjectCard>
  )
}

export default ProjectTile