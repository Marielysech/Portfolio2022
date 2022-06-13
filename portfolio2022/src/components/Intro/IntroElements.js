import styled, { keyframes } from "styled-components"
import { Link as LinkS } from "react-scroll/modules";
import {BsArrowDownCircleFill} from 'react-icons/bs'

export const IntroSection = styled.div`background-color: #457383;
height:100vh;
padding-top: 2rem;
margin-bottom: -2.5rem;

/* @media screen and (max-width: 900px) {
        height:160vh;
    }

@media screen and (max-width: 780px) {
    height:180vh;
}

@media screen and (max-width: 600px) {
    height:200vh;
}

@media screen and (max-width: 400px) {
    height:230vh;
} */
`

export const Container = styled.div`
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 65%;

    @media screen and (max-width: 800px) {
            font-size: 100px;
            height: 60%;
            margin-bottom: 7rem;

        };

    
`

   


    export const FullName = styled.div`
        width: 100%;
        font-size: 120px;
        font-weight: 800;
        padding-bottom: 1rem;
        padding-right: 2rem;
        font-family:'Space Grotesk', sans-serif;
        
        &:hover {
            color: #F8EFDB;
            /* font-size: 100px; */
            transition: 0.3s ease-in-out;
        }


        @media screen and (max-width: 800px) {
            font-size: 110px;

        }

        @media screen and (max-width: 650px) {
        display: none;
    };


    `

export const Links = styled(LinkS)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* &:hover {
        font-size: 20px
    } */
`

export const CTAContainer = styled(LinkS)`
    margin: -3rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #F8EFDB;
    width: fit-content;
    padding: 2rem 1rem;
    border-radius: 15px;
    border-top-right-radius: 15px;
    border: 1px solid #F8EFDB;
    cursor: pointer;

    @media screen and (max-width: 500px) {
            display: none;
        }

    &:hover {
        background-color: #F8EFDB;
        transition: 0.3s ease-in-out;
        color: #457383;
    }
`


export const ScrollDown = styled.p`
    color: inherit;
    font-weight: bold;
    font-size: 15px;
    &:hover { 
        font-size: 16px;
    }
`

export const Icon = styled(BsArrowDownCircleFill)`
    margin-top: 0.5rem;
    color: inherit;
    font-size: 20px;
    cursor: pointer;

    &:hover { 
        font-size: 25px;

    }

`
const circleAnimation = keyframes`
 0% { -webkit-transform: rotate(0deg)}
 100% { -webkit-transform: rotate(360deg) }
`

export const CircleElements = styled.h2`
    position: absolute;
    user-select: none;
    pointer-events: none;
    font-size: 40px; 
    animation:  ${circleAnimation} 7.5s linear infinite;   
    transform-origin: 0 200px; 
    z-index: 999;
`


export const Span = styled.span`
    position: absolute;
    display: inline-block;
    text-transform: uppercase;
    transform-origin: 0 200px; 


`
export const MobileInto = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -300px;



@media screen and (min-width: 650px) {
    display: none;
};

`
