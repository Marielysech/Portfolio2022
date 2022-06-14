import styled from "styled-components";
import {ImLinkedin} from 'react-icons/im'


export const FooterSection = styled.div`
    background-color: #F8EFDB;
    height:20vh;

    @media screen and (max-width: 768px) {
            height:50vh;
        }
        
`


export const FSmallSection = styled.div`
  display: flex;
  flex-direction: column ;
  align-items: center;
  width: 50%;

  @media screen and (max-width: 768px) {
    padding: 0.6rem 0;
        }
`

export const Linkedin = styled("")`
color: black;
cursor: pointer;
font-size: 25px;

&:hover {
  color: #457383;
  font-size: 27px;
  transition: 0.3s ease-in-out
}

`

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;  
  justify-content: space-around;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    
  }

`



export const Title = styled.div`
  color: #FF6F59;
  font-weight: 800;
  margin-bottom: 0.8rem;
  border-bottom: 1px solid #FF6F59;

`



export const Icons = styled.div`
  display: flex;
  flex-direction: row; 
  justify-content: space-around;
`


export const CContent = styled.div`
  color: #FF6F59;
  font-weight:200; 

`
export const SocialIcon = styled.a`
  color: #FF6F59;
  padding: 0 0.5rem;
  font-size: 20px;

  &:hover {
    font-size: 28px;
    color: #457383;
  }

`

export const CopyRigth = styled.small`
  color: #FF6F59;
  display: block;
  font-size: 15px;
  font-weight: 300;
  width: fit-content;
  margin: 0 auto;
  font-style: italic;
`
