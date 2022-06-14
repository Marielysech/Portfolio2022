import styled from "styled-components";

export const StackSection = styled.div`
background-color: #457383;
height:100vh;

@media screen and (max-width: 900px) {
        height: fit-content;
        padding-bottom: 2rem;

    }
`

export const StackGrid = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 1rem auto;
    margin-top: 2.5rem;
    text-align: center;
    width: 70%;


    @media screen and (max-width: 850px) {
        flex-direction: column;
        justify-content: space-between;
        width: 65%;

    }

    @media screen and (max-width: 600px) {
        width: 80%;
    }

   


`

export const Infos = styled.div`

@media screen and (max-width: 480px) {
        padding-top: 4.4rem;
    }
    
`

export const Subtitle = styled.h2`
    text-align: center;
    width: fit-content;
    margin: -1rem auto;
    font-size: 45px;

    @media screen and (max-width: 480px) {
        padding-top: 4rem;
    }
   

    
`

export const BackEndInfos = styled.div``

export const Langages = styled.div`
    display: block;
    background-color: #F8EFDB ;
    margin: 0.5rem auto;
    color: #457383;
    font-size: 17px;
    width: 60%;
    border-radius: 10px;
    padding: 0.3rem;
    font-weight: bold;

    &:hover {
        background-color: #FF6F59;
        color: #F8EFDB;
        transition: 0.3s ease-in-out ;
    }

    @media screen and (max-width: 768px) {
        width: 60%
    }

    @media screen and (max-width: 1100px) {
        width: 60%;
        
    }
`
