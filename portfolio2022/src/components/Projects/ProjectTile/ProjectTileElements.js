import styled from 'styled-components'
import {AiFillGithub} from 'react-icons/ai'
import {FiExternalLink} from 'react-icons/fi'

export const ProjectCard = styled.div`
border: 6px solid #F8EFDB;
background-color: white;
border-radius: 25px;
margin: 0.5rem;
padding: 0.5rem;
padding-bottom: 1rem;
overflow: hidden;
max-height: 100%;
display: flex;
flex-flow: column;
max-width: 95%;
position: relative;
`
export const Title = styled.h3`
  font-weight: bold;
  margin: -0.2rem 0.5rem ;
`

export const TagsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    
`

export const Tag = styled.p`
    background-color: #F8EFDB;
    width: fit-content;
    padding: 0.3rem 0.7rem;
    margin: .4rem 0;
    font-size: 80%;
    border-radius: 15px;
    font-weight: 600;
    color: #457383;
`

export const Description = styled.p`
  margin: 0.5rem ;
  text-align: justify;
  font-size: 75%;
  height: 40%;

`


export const LinkContainer = styled.p`
display: flex;
flex-direction: row;
justify-content: space-evenly;
padding-top: 0.7rem;
`

export const Website = styled(FiExternalLink)`
color: black;
cursor: pointer;
font-size: 25px;

&:hover {
  color: #457383;
  font-size: 27px;
  transition: 0.3s ease-in-out
}

`

export const Github = styled(AiFillGithub)`
color: black;
cursor: pointer;
font-size: 25px;

&:hover {
  color:#457383;
  font-size: 27px;
  transition: 0.3s ease-in-out
}
`

export const ProjectImg = styled.img`
max-width: 100%;
border-radius: 25px;
`

export const Button = styled.button`
    display: block;
    margin: 0 auto;
    margin-top: 0.5rem;
    margin-bottom: -0.5rem;
    background-color: #457383;
    border: 2px solid #457383;
    color: #F8EFDB;
    padding: 0.5rem 1rem;
    font-size: 15px;
    border-radius: 20px;
    border: none;
    

    &:hover {
        background-color: white;
        border: 2px solid #457383;
        color: #457383;
        transition: 0.3s ease-in-out;
    }   
`