import styled from "styled-components";

export const StackSection = styled.div`
background-color: #457383;
height:100vh;
`

export const StackGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 2rem auto;
    text-align: center;
    width: 70%;
`

export const FrontEndInfos = styled.div``

export const Subtitle = styled.h2`
    text-align: center;
    width: fit-content;
    margin: 0 auto;
    font-size: 45px;

    
`

export const BackEndInfos = styled.div``

export const Langages = styled.div`
    display: block;
    background-color: #F8EFDB ;
    margin: 0.5rem auto;
    color: #457383;
    font-size: 20px;
    width: 50%;
    border-radius: 10px;
    padding: 0.3rem;
    font-weight: bold;

    &:hover {
        background-color: #FF6F59;
        color: #F8EFDB;
        transition: 0.3s ease-in-out ;
    }
`
