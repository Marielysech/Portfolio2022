import styled from "styled-components";

export const AboutSection = styled.div`
background-color: #457383;
height:100vh;

@media screen and (max-width: 850px) {
        height:130vh;
    }
`

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr );

`

export const Text = styled.p`
    width: 60%;
    margin: 0 auto;
`

export const Img = styled.img`
    max-width: 100%;
    
`
export const ShortSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`

export const TextShort = styled.p`
    font-size: 15px;
    width: 50%;
    text-align: left;
    color: #F8EFDB;

`

export const ShortSection = styled.div``

export const TitleShort = styled.h3`
    color: #F8EFDB;
    width: fit-content;
    border-bottom: 2px solid #FF6F59;
    font-family: 'Space Grotesk', sans-serif;
    margin-bottom: 0.5rem;
`

export const ShortElem = styled.p`
    color: #457383;
    background-color: #F8EFDB;
    margin: 0.5rem 0;
    width: fit-content;
    font-weight: bold;
    font-size: 15px;
    padding: 0.2rem 0.5rem ;
    border-radius: 10px
    
  `
