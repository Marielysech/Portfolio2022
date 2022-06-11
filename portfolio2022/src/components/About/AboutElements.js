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

